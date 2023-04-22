function setup() {
    $('.lastupdated').html(moment.unix(Math.floor(lastupdated)).fromNow());
    timestamp = true;
}

function convert(n) {
  n = String(n);
  if (n.length == 5)
  n = '0' + n;
  return n;
}

function twodigits(n){
    return n > 9 ? "" + n: "0" + n;
}

function todate(timestamp){
    var a = new Date(timestamp * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = twodigits(a.getMinutes());
    var sec = twodigits(a.getSeconds());
    var time = month + ' ' + date + ', ' + year + ' at ' + hour + ':' + min + ':' + sec;
    return time;
}

function toggle_timestamp_view(elem) {
  timestamp = !timestamp;
  $(elem).toggleClass("on");
  console.log(timestamp);
  load_timestamps(this);
}

function load_timestamps() {
  const elements = document.querySelectorAll(".e");
    elements.forEach( el => {
        postedstamp = $(el).children(".t").attr("data-value");
        offset = new Date().getTimezoneOffset();
        postedstamp = postedstamp - offset*-60;
        if (timestamp == true) {
            $(el).children(".t").html(moment.unix(postedstamp).fromNow());
        } else {
            $(el).children(".t").html(todate(postedstamp));
        }
    });
    if (timestamp == true) {
        $('.lastupdated').html(moment.unix(Math.floor(lastupdated)).fromNow());
    } else {
        $('.lastupdated').html(todate(lastupdated));
    }
}

function toggle_menu() {
  $(".menu_holder").toggleClass('active');
}

function set_scoreboard(event, elem) {
  $(".menu_holder").removeClass('active');
  id = elem.id;
  if ($(elem).is("#ww") || $(elem).is("#zp") || $(elem).is("#hm") || $(elem).is("#sn1") || $(elem).is("#sn2") || $(elem).is("#sn3") || $(elem).is("#sn4") || $(elem).is("#sn5")) {
    if (event.shiftKey) {
      $(".sb_name").html(window[id+"_sim_name"]);
      $(".sb_cat").html(window[id+"_sim_category"]);
      $(".sb_e").html(window[id+"_sim_scores"]);
    } else {
      $(".sb_name").html(window[id+"_name"]);
      $(".sb_cat").html(window[id+"_category"]);
      $(".sb_e").html(window[id+"_scores"]);
    }
  } else {
    $(".sb_name").html(window[id+"_name"]);
    $(".sb_cat").html(window[id+"_category"]);
    $(".sb_e").html(window[id+"_scores"]);
  }
  load_timestamps();
  const elements = document.querySelectorAll(".e");
    elements.forEach( el => {
        if ($(elem).is("#gt1") || $(elem).is("#gt2") || $(elem).is("#gt3")) {
            numbervalue = $(el).children().children(".v").html();
            timevalue = (numbervalue/30);
            var min = Math.floor(timevalue % 3600 / 60);
            var sec = convert((timevalue % 60).toFixed(3));
            $(el).children().children(".v").html("0" + min + ":" + sec.substring(0, sec.length - 1));
        }
        var oldname = $(el).children().children(".p").html();
        if (oldname == "rae") {
            oldname += "<img class='badge badge_rae' title='Crankyboard Admin' />";
            $(el).children().children(".p").html(oldname);            
        }
        if (oldname == "GantProdux") {
            oldname += "<img class='badge badge_tym' title='Tiny Yellow Machine' />";
            $(el).children().children(".p").html(oldname);            
        }
        if (oldname == "andy" || oldname == "dave" || oldname == "marc" || oldname == "Arisa") {
            oldname += "<img class='badge badge_panic' title='Panic Team' />";
            $(el).children().children(".p").html(oldname);            
        }
        if (oldname == "bennett" || oldname == "Giles" || oldname == "mistermo" || oldname == "davemakes" || oldname == "7635678961621917") {
            oldname += "<img class='badge badge_s1' title='Season 1 Dev' />";
            $(el).children().children(".p").html(oldname);            
        }
        if (oldname == "davemakes" || oldname == "LedbetterGames" || oldname == "RDK") {
            oldname += "<img class='badge badge_catalog' title='Catalog Dev' />";
            $(el).children().children(".p").html(oldname);            
        }
    });
    if ($(".sb_e").html() == "") {
      $(".sb_e").html("<p class='sb_empty'>This scoreboard's currently empty. Start playing and take Rank 1!</p>")
    }
}