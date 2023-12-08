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
      $(".sb_name").html('<a href="' + window[id+"_link"] + '">' + window[id+"_sim_name"] + '</a>');
      $(".sb_cat").html(window[id+"_sim_category"]);
      $(".sb_e").html(window[id+"_sim_scores"]);
    } else {
      $(".sb_name").html('<a href="' + window[id+"_link"] + '">' + window[id+"_name"] + '</a>');
      $(".sb_cat").html(window[id+"_category"]);
      $(".sb_e").html(window[id+"_scores"]);
    }
  } else {
    $(".sb_name").html('<a href="' + window[id+"_link"] + '">' + window[id+"_name"] + '</a>');
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
        if ($(elem).is("#pr1") || $(elem).is("#pr2") || $(elem).is("#pr3") || $(elem).is("#pr4") || $(elem).is("#pr5") || $(elem).is("#pr6") || $(elem).is("#pr7") || $(elem).is("#pr8")) {
            numbervalue = $(el).children().children(".v").html();
            timevalue = (numbervalue);
            var min = Math.floor(timevalue / 60000);
            var sec = ((timevalue % 60000) / 1000).toFixed(3);
            $(el).children().children(".v").html(min + ":" + sec);
        }
        if ($(elem).is("#pr1")) {
            if ($(el).children().children(".v").html() <= "0:34.900") {
              $(el).children().children(".v").append("<i class='goal fa-solid fa-circle-check'></i>");
            }
        }
        if ($(elem).is("#pr2")) {
            if ($(el).children().children(".v").html() <= "0:33.100") {
              $(el).children().children(".v").append("<i class='goal fa-solid fa-circle-check'></i>");
            }
        }
        if ($(elem).is("#pr3")) {
            if ($(el).children().children(".v").html() <= "0:29.600") {
              $(el).children().children(".v").append("<i class='goal fa-solid fa-circle-check'></i>");
            }
        }
        if ($(elem).is("#pr4")) {
            if ($(el).children().children(".v").html() <= "0:38.200") {
              $(el).children().children(".v").append("<i class='goal fa-solid fa-circle-check'></i>");
            }
        }
        if ($(elem).is("#pr5")) {
            if ($(el).children().children(".v").html() <= "0:37.200") {
              $(el).children().children(".v").append("<i class='goal fa-solid fa-circle-check'></i>");
            }
        }
        if ($(elem).is("#pr6")) {
            if ($(el).children().children(".v").html() <= "0:37.300") {
              $(el).children().children(".v").append("<i class='goal fa-solid fa-circle-check'></i>");
            }
        }
        if ($(elem).is("#pr7")) {
            if ($(el).children().children(".v").html() <= "0:35.400") {
              $(el).children().children(".v").append("<i class='goal fa-solid fa-circle-check'></i>");
            }
        }
        if ($(elem).is("#pr8")) {
            if ($(el).children().children(".v").html() <= "0:40.400") {
              $(el).children().children(".v").append("<i class='goal fa-solid fa-circle-check'></i>");
            }
        }
        if ($(elem).is("#dy")) {
            $(el).children().children(".v").append("m");
        }
        
        var oldname = $(el).children().children(".p").html() + " ";
        if (oldname.startsWith("rae ")) {
            oldname += "<img class='badge badge_rae' title='Crankyboard Admin' />";
        }
        if (oldname.startsWith("GantProdux ")) {
            oldname += "<img class='badge badge_tym' title='TYM - Host of Tiny Yellow Machine.' />";
        }
        if (oldname.startsWith("andy ") || oldname.startsWith("dave ") || oldname.startsWith("morc ") || oldname.startsWith("Arisa ")) {
            oldname += "<img class='badge badge_panic' title='Panic Team - An employee from Panic, Inc.' />";
        }
        if (oldname.startsWith("bennett ") || oldname.startsWith("Giles ") || oldname.startsWith("mistermo ") || oldname.startsWith("davemakes ") || oldname.startsWith("7635678961621917 ")) {
            oldname += "<img class='badge badge_s1' title='Season 1 Dev - Has made a game that was a part of Season 1.' />";
        }
        if (oldname.startsWith("davemakes ") || oldname.startsWith("LedbetterGames ") || oldname.startsWith("RDK ") || oldname.startsWith("ScenicRouteSoftware ") || oldname.startsWith("LDBR_art ") || oldname.startsWith("stevelavietes ") || oldname.startsWith("Link ") || oldname.startsWith("RPDev ") || oldname.startsWith("SquidGod ") || oldname.startsWith("garethiw ") || oldname.startsWith("vogelscript ") || oldname.startsWith("Pichuscute ") || oldname.startsWith("MouflonCloud ") || oldname.startsWith("burgess ") || oldname.startsWith("Toad ")) {
            oldname += "<img class='badge badge_catalog' title='Catalog Dev - Has made a game that has been published on Catalog.' />";
        }
        if (oldname.startsWith("tavi ") || oldname.startsWith("uncletrunks ") || oldname.startsWith("2257259091194867 ") || oldname.startsWith("rae ")) {
            oldname += "<img class='badge badge_dominator' title='Dominator - Has taken all #1 ranks in a multi-category game.' />";
        }
        $(el).children().children(".p").html(oldname);
    });
    if ($(".sb_e").html() == "") {
      $(".sb_e").html("<p class='sb_empty'>This scoreboard's currently empty. Start playing and take Rank 1!</p>")
    }
}