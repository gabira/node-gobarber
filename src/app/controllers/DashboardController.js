const moment = require('moment');
const { Op } = require('sequelize');
const { User, Appointment } = require('../models');

class DashboardController {
  async index(req, res) {
    const providers = await User.findAll({ where: { provider: true } });

    return res.render('dashboard', { providers });
  }

  async appointments(req, res) {
    const { user } = req.session;

    if (!user.provider) res.redirect('/app/dashboard');

    const appointments = await Appointment.findAll({
      where: {
        provider_id: user.id,
        date: {
          [Op.between]: [
            moment()
              .startOf('day')
              .format(),
            moment()
              .endOf('day')
              .format(),
          ],
        },
      },
      include: [{ model: User, as: 'customer' }],
      order: [['date']],
    });

    const schedule = appointments.map((a, index) => ({
      ...a,
      date: moment(a.date).format('HH:mm'),
      index: index + 1,
      isPast: moment(a.date).isBefore(moment()),
    }));

    return res.render('appointments/show', { schedule });
  }
}

module.exports = new DashboardController();
