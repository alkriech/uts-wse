let events = require('../data/events.data.js');

exports.getAllEvents = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Data semua events berhasil diambil",
    data: events
  });
};

exports.getEventById = (req, res) => {
  const id = parseInt(req.params.id);
  const event = events.find(e => e.id === id);

  if (event) {
    res.status(200).json({
      status: "success",
      data: event
    });
  } else {
    res.status(404).json({
      status: "fail",
      message: "Event tidak ditemukan"
    });
  }
};

exports.createEvent = (req, res) => {
  const { title, date, location } = req.body;

  if (!title || !date || !location) {
    return res.status(400).json({
      status: "fail",
      message: "Field 'title', 'date', dan 'location' wajib diisi"
    }); 
  }

  const newId = events.length > 0 ? events[events.length - 1].id + 1 : 1;
  const newEvent = {
    id: newId,
    title,
    date,
    location
  };

  events.push(newEvent);

  res.status(201).json({
    status: "success",
    message: "Data event berhasil dibuat",
    data: newEvent
  });
};

exports.updateEvent = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, date, location } = req.body;
  const index = events.findIndex(e => e.id === id);

  if (index === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Event tidak ditemukan"
    });
  }

  if (!title || !date || !location) {
    return res.status(400).json({
      status: "fail",
      message: "Field 'title', 'date', dan 'location' wajib diisi"
    });
  }

  const updatedEvent = {
    id: id,
    title,
    date,
    location
  };
  events[index] = updatedEvent;

  res.status(200).json({
    status: "success",
    message: "Data event berhasil diupdate",
    data: updatedEvent
  });
};

exports.deleteEvent = (req, res) => {
  const id = parseInt(req.params.id);
  const index = events.findIndex(e => e.id === id);

  if (index === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Event tidak ditemukan"
    });
  }

  events.splice(index, 1);

  res.status(204).send(); 
};