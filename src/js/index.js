import 'bootstrap';

import '../scss/index.scss';

const arr = [
  {id: "1", bezeichnung: "besondere Veranstaltungen", sortkey: "10", color: "#fa573c"},
  {id: "2", bezeichnung: "Gottesdienste", sortkey: "0", color: "#92e1c0", oeffentlich_yn: "1"},
  {id: "16", bezeichnung: "Bibel - und Gebetskreise", sortkey: "20", color: "#4986e7"},
  {id: "98", bezeichnung: "Krabbelkreis Flohkiste", sortkey: "100", color: "black", oeffentlich_yn: "1"},
  {id: "101", bezeichnung: "Kinderstunde", sortkey: "105", color: "black", oeffentlich_yn: "1"},
  {id: "104", bezeichnung: "Kinderchor - Pfuhler Kids", sortkey: "140", color: "black"},
  {id: "107", bezeichnung: "Männer", sortkey: "80", color: "black", oeffentlich_yn: "1", privat_yn: "0"},
  {id: "110", bezeichnung: "Frauen", sortkey: "90", color: "black", oeffentlich_yn: "1", privat_yn: "0"},
  {id: "113", bezeichnung: "EC - Teenkreis Pfuhl", sortkey: "150", color: "black", oeffentlich_yn: "1"},
  {id: "116", bezeichnung: "EC - Jugendkreis", sortkey: "160", color: "black", oeffentlich_yn: "1"},
  {id: "119", bezeichnung: "EC - Jungschar Mädchen Pfuhl", sortkey: "115", color: "black"},
  {id: "125", bezeichnung: "EC - Jungschar Mädchen Burlafingen", sortkey: "110", color: "black"},
  {id: "128", bezeichnung: "EC - Jungschar Jungs Burlafingen", sortkey: "130", color: "black"},
  {id: "131", bezeichnung: "EC - Jungschar Jungs Pfuhl", sortkey: "135", color: "black"},
];

function updateLink() {
  var ids = [];
  $('.cal:checkbox:checked').each(function() {
    ids.push($(this).val())
  });
  var link = "lkg-pfuhl.church.tools/?q=churchcal/ical";
  if (ids.length > 0) {
    link = "lkg-pfuhl.church.tools/?q=churchcal/ical&category_id=" + ids.join(',') + "&category_select=" + ids.join(',');
  }
  $('#icallink').html("<a href=\"https://" + link + "\">iCal-Link</a>");
  $('#icaltext').text("https://" + link);

  $('#webcallink').html("<a href=\"webcal://" + link + "\">WebCal-Link</a>");
}

$(document).ready(function() {
  console.log("ready, loading calls");
  updateLink();

  $(arr).each(function() {
    var sel = $('<div>').appendTo('#callist');
    sel.append($("<input>").attr("class", 'cal').attr('value',this.id).attr('type','checkbox'));
    sel.append(" " + this.bezeichnung);
  });
  $('.cal').change(() => {
    updateLink();
  });
});
