var content = [
  {
    id: "sea",
    desc: "<p><b>Suchmaschinenwerbung (SEA)</b> ermöglicht es, durch bezahlte Anzeigen auf Suchmaschinen schnell Sichtbarkeit und Traffic für Ihre Website zu generieren. Diese Methode ist entscheidend für Unternehmen, die sofort in einem wettbewerbsintensiven Markt sichtbar sein möchten. Besonders beim Launch neuer Produkte oder in wichtigen Verkaufsphasen kann SEA einen unmittelbaren Schub liefern. Wir kombinieren strategisches Bieten, ansprechende Anzeigentexte und kontinuierliche Optimierung basierend auf Echtzeitdaten, um Ihren ROI zu maximieren. Durch unser tiefes Verständnis von Suchalgorithmen und Nutzerverhalten platzieren wir Ihre Anzeigen effektiv, damit sie zur optimalen Zeit Ihre Zielgruppe erreichen.</p>",
    img: "https://uploads-ssl.webflow.com/65c2846d0c4b7b48e319b0ae/65de1b506cd836919f5ae011_Foto%20Gerry%20Ebner%20-%20Copy%20(2).jpg",
    name: "Max Mustermann",
    title: "Experte für SEA",
    mobile: "0160224235543",
    email: "max.mustermann@sea.de",
  },
  {
    id: "seo",
    desc: "<p><b>Suchmaschinenoptimierung (SEO)</b> verbessert die Sichtbarkeit Ihrer Website organisch, ohne für jeden Klick bezahlen zu müssen. Langfristig ist SEO essentiell, um nachhaltige Online-Sichtbarkeit und Glaubwürdigkeit aufzubauen. Dies ist besonders wichtig, wenn Sie Autorität in Ihrer Branche etablieren oder in einen neuen Markt eintreten wollen, wo langfristiges Kundenengagement entscheidend ist. Unsere SEO-Strategie fokussiert sich auf umfassende Keyword-Recherche, Erstellung hochwertiger Inhalte und Optimierung Ihrer Website-Architektur, um Ihre Suchrankings schrittweise zu verbessern.</p>",
    img: "https://uploads-ssl.webflow.com/65c2846d0c4b7b48e319b0ae/65de1b506cd836919f5ae011_Foto%20Gerry%20Ebner%20-%20Copy%20(2).jpg",
    name: "Julia Schmidt",
    title: "SEO-Expertin",
    mobile: "0160224235566",
    email: "julia.schmidt@seo.de",
  },
  {
    id: "social",
    desc: "<p><b>Social Media Management</b> umfasst das Erstellen und Verwalten von Inhalten auf Plattformen wie Facebook, Instagram und Twitter. Es ist entscheidend für Marken, die eine starke Verbindung zu ihrer Zielgruppe aufbauen und ihre digitale Präsenz verstärken möchten. Wir entwickeln maßgeschneiderte Strategien, die auf Interaktion abzielen, Markentreue aufbauen und die Sichtbarkeit Ihrer Marke steigern.</p>",
    img: "https://uploads-ssl.webflow.com/65c2846d0c4b7b48e319b0ae/65de1b506cd836919f5ae011_Foto%20Gerry%20Ebner%20-%20Copy%20(2).jpg",
    name: "Anna Bauer",
    title: "Social Media Managerin",
    mobile: "0160224235577",
    email: "anna.bauer@social.de",
  },
  {
    id: "crm",
    desc: "<p><b>CRM & Automation</b> verbessern die Effizienz Ihrer Kundenbeziehungen durch den Einsatz von Technologie zur Automatisierung von Kommunikations- und Verwaltungsprozessen. Dies ist besonders wichtig für Unternehmen, die ihre Kundenbeziehungen intensivieren und gleichzeitig die Effizienz steigern wollen. Unsere Lösungen sind darauf ausgelegt, Ihre Kundendaten effektiv zu nutzen und personalisierte Erlebnisse zu schaffen.</p>",
    img: "https://uploads-ssl.webflow.com/65c2846d0c4b7b48e319b0ae/65de1b506cd836919f5ae011_Foto%20Gerry%20Ebner%20-%20Copy%20(2).jpg",
    name: "Thomas Weber",
    title: "CRM-Spezialist",
    mobile: "0160224235588",
    email: "thomas.weber@crm.de",
  },
  {
    id: "bi",
    desc: "<p><b>Business Intelligence & Analytics</b> transformieren Ihre Unternehmensdaten in Erkenntnisse, die strategische Entscheidungen unterstützen. Dies ist entscheidend für Unternehmen, die datengesteuerte Entscheidungsfindung nutzen möchten, um ihre Marktstellung zu verbessern und Wettbewerbsvorteile zu erzielen. Unsere analytischen Lösungen bieten tiefgehende Einblicke in Marktrends und Kundenverhalten.</p>",
    img: "https://uploads-ssl.webflow.com/65c2846d0c4b7b48e319b0ae/65de1b506cd836919f5ae011_Foto%20Gerry%20Ebner%20-%20Copy%20(2).jpg",
    name: "Michael Neumann",
    title: "Analyst",
    mobile: "0160224235599",
    email: "michael.neumann@bi.de",
  },
  {
    id: "ux",
    desc: "<p><b>Shop & Website UX</b> konzentriert sich darauf, die Benutzererfahrung Ihrer Online-Plattformen zu optimieren, um die Nutzerbindung zu erhöhen und die Konversionsraten zu verbessern. Wir analysieren und gestalten jede Interaktion auf Ihrer Website, um sicherzustellen, dass sie intuitiv, ansprechend und effektiv ist, was direkt zu einer höheren Kundenzufriedenheit und letztlich zu mehr Umsatz führt.</p>",
    img: "https://uploads-ssl.webflow.com/65c2846d0c4b7b48e319b0ae/65de1b506cd836919f5ae011_Foto%20Gerry%20Ebner%20-%20Copy%20(2).jpg",
    name: "Laura Hoffmann",
    title: "UX-Designerin",
    mobile: "0160224235510",
    email: "laura.hoffmann@ux.de",
  },
];

$(document).ready(function () {
  var timer = 0;

  content.forEach(function (item) {
    var expandable = `
            <div class="expandable" id="${item.id}">
                <button class="close-btn">&#10005;</button>
                <div class="expandable-flex">
                    <div class="description">
                        <p>${item.desc}</p>
                    </div>
                    <div class="profile">
                        <img src="${item.img}" />
                        <div class="name">${item.name}</div>
                        <div class="title">${item.title}</div>
                        <div class="socials">
                            <b>M:</b> ${item.mobile}<br />
                            <b>E:</b> <a href="mailto:${item.email}">${item.email}</a><br />
                        </div>
                    </div>
                </div>
            </div>`;
    // expandable = $($.parseHTML(expandable));
    // expandable.addClass("expandable");
    $(".tbar").append(expandable);
  });

  $(".label").click(function () {
    if ($(this).hasClass("activelabel")) {
      return;
    }
    $(".label").removeClass("activelabel");
    $(this).addClass("activelabel");
    var target = $(this).data("target");
    $(".expandable").slideUp(300);
    setTimeout(function () {
      $(target).slideDown(300);
    }, timer);
    timer = 300;
  });
  $(".close-btn").click(function () {
    $(this).parent().slideUp();
    $(".label").removeClass("activelabel");
    timer = 0;
  });
});
