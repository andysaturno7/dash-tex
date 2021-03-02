const axios = require("axios");
const jwt = require("jsonwebtoken");
const {
  listMeetings,
  listWebinars,
} = require("../../api/zoom/controllers/zoom");
const config = {
  APIKey: "FnVcIY_2RNSfYvBTsd1TFg",
  APISecret: "MJWYm9b5WBsf2fIlTgWcztn6J10J7BlLaOG0",
};

const payload = {
  iss: config.APIKey,
  exp: new Date().getTime() + 5000,
};

const token = jwt.sign(payload, config.APISecret);

const uri = "https://api.zoom.us/v2/";

module.exports = {
  async usersFind() {
    var config = {
      method: "get",
      url: uri + "users?status=active&page_size=30",
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    var dat = await axios(config)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
    return dat;
  },

  async userDetail(email) {
    var config = {
      method: "get",
      url: uri + "users/" + email,
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    var data = await axios(config)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return error;
      });
    return data;
  },

  async listWM(wm) {
    var fromDate, toDate;
    date = new Date();
    fromDate = "2020-10-20";
    toDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    var config = {
      method: "get",
      url:
        uri + "metrics/" + wm + "?type=past&from=" + fromDate + "&to=" + toDate,
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    var data = await axios(config)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
    return data;
  },

  async listScheduleUsers(wm, wmId, body) {
    var next_page_token, participants, type;
    date = new Date();
    participants = [];
    next_page_token = "";
    type = body.type;

    var config = {
      method: "get",
      url: `${uri}metrics/${wm}/${wmId}/participants?type=${type}&page_size=300`,
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    do {
      if (next_page_token !== "") {
        config.url = `${uri}metrics/${wm}/${wmId}/participants?type=${type}&page_size=300&next_page_token=${next_page_token}`;
      }
      var data = await axios(config)
        .then((res) => {
          next_page_token = res.data.next_page_token;
          console.log(next_page_token);
          return res.data;
        })
        .catch((err) => {
          console.log(err);
          return err;
        });

      for (let index = 0; index < data.participants.length; index++) {
        var { id, user_id, user_name, email, leave_time } = data.participants[
          index
        ];
        data.participants[index] = {
          id,
          user_id,
          user_name,
          email,
          leave_time,
        };
        if (type === "past") {
          participants.push(data.participants[index]);
        }
        if (type === "live" && !data.participants[index].leave_time) {
          participants.push(data.participants[index]);
        }
      }
    } while (next_page_token !== "");
    return participants;
  },

  async getRegistrants(wm, wmId, status) {
    var next_page_token = "";
    var registrants = [];

    var config = {
      method: "get",
      url: `${uri}${wm}/${wmId}/registrants/?status=${status}&page_size=300`,
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    do {
      if (next_page_token !== "") {
        config.url = `${uri}${wm}/${wmId}/registrants/?status=${status}&page_size=300&next_page_token=${next_page_token}`;
      }

      var data = await axios(config)
        .then((res) => {
          next_page_token = res.data.next_page_token;
          return res.data;
        })
        .catch((err) => {
          return err;
        });

      if (data.registrants) {
        for (let i = 0; i < data.registrants.length; i++) {
          var element = data.registrants[i];
          registrants.push(element);
        }
      }
    } while (next_page_token !== "");

    return registrants;
  },
};
