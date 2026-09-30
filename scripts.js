/* EDITE AQUI os seus dados */
    var ME = {
      nome: "Precioso Wakeni",
      whatsapp: "244953415452",          // número com código do país, sem + nem espaços
      facebook: "https://www.facebook.com/share/14qFRTqHuXk/",
      instagram: "https://www.instagram.com/precioso_wakeni?stkn=MXQxeGRreHk4ank0bg==",
      github: "https://github.com/seu-usuario"
    };
    document.getElementById("navName").textContent = ME.nome;
    document.title = ME.nome + " | Técnico de Informática";
    var wa = "https://wa.me/" + ME.whatsapp + "?text=" + encodeURIComponent("Olá " + ME.nome + ", vi o seu portfólio.");
    var list = [["WhatsApp", wa], ["GitHub", ME.github], ["Instagram", ME.instagram], ["Facebook", ME.facebook]];
    var box = document.getElementById("links");
    list.forEach(function(x){
      var a = document.createElement("a");
      a.href = x[1]; a.textContent = x[0]; a.target = "_blank"; a.rel = "noopener";
      box.appendChild(a);
    });
    var w = document.getElementById("ctaWa"); w.href = wa; w.target = "_blank"; w.rel = "noopener";
    var g = document.getElementById("ctaGh"); g.href = ME.github; g.target = "_blank"; g.rel = "noopener";
    document.getElementById("foot").textContent = "© " + new Date().getFullYear() + " " + ME.nome;
