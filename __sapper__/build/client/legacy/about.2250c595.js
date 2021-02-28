import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, h as space, g as element, t as text, B as query_selector_all, m as detach_dev, n as claim_space, j as claim_element, k as children, l as claim_text, o as attr_dev, p as add_location, r as set_style, u as insert_dev, w as append_dev, x as noop, f as validate_slots } from './client.9715eea3.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/about.svelte";

function create_fragment(ctx) {
  var t0;
  var section;
  var div2;
  var h1;
  var t1;
  var span;
  var t2;
  var t3;
  var div0;
  var t4;
  var t5;
  var p0;
  var t6;
  var em0;
  var t7;
  var t8;
  var em1;
  var t9;
  var t10;
  var t11;
  var p1;
  var t12;
  var a0;
  var t13;
  var t14;
  var t15;
  var p2;
  var t16;
  var a1;
  var t17;
  var t18;
  var em2;
  var t19;
  var t20;
  var a2;
  var t21;
  var t22;
  var t23;
  var p3;
  var t24;
  var a3;
  var t25;
  var t26;
  var a4;
  var t27;
  var t28;
  var a5;
  var t29;
  var t30;
  var em3;
  var t31;
  var t32;
  var t33;
  var div1;
  var a6;
  var i0;
  var t34;
  var a7;
  var i1;
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      div2 = element("div");
      h1 = element("h1");
      t1 = text("Marcos\n\t\t\t");
      span = element("span");
      t2 = text("Zaghetto");
      t3 = space();
      div0 = element("div");
      t4 = text("Desenvolvedor Front-End");
      t5 = space();
      p0 = element("p");
      t6 = text("Atuo com Desenvolvimento PHP há mais de 10 anos e tenho uma grande\n\t\t\texperiência com Desenvolvimento Web em geral (");
      em0 = element("em");
      t7 = text("Full-Stack");
      t8 = text("),\n\t\t\ttrabalhando com tecnologias como PHP, ");
      em1 = element("em");
      t9 = text("Framework");
      t10 = text(" Laravel, MySQL, PostgreSQL,\n\t\t\tHTML, CSS, JavaScript, jQuery, Bootstrap e outras.");
      t11 = space();
      p1 = element("p");
      t12 = text("Sou autor do ");
      a0 = element("a");
      t13 = text("Blog do Beraldo");
      t14 = text(", onde publico conteúdos sobre Programação desde 2009.");
      t15 = space();
      p2 = element("p");
      t16 = text("Também sou autor e instrutor do ");
      a1 = element("a");
      t17 = text("Curso ULTIMATE PHP");
      t18 = text(", curso ");
      em2 = element("em");
      t19 = text("online");
      t20 = text(" destinado para iniciantes em PHP, com o objetivo\n\t\t\tde formar profissionais qualificados para o Mercado de Trabalho. Também\n\t\t\tcriei o\n\t\t\t");
      a2 = element("a");
      t21 = text("Blog do ULTIMATE PHP");
      t22 = text(", com conteúdos básicos sobre PHP.");
      t23 = space();
      p3 = element("p");
      t24 = text("Sou graduado em ");
      a3 = element("a");
      t25 = text("Ciência da Computação");
      t26 = text(", pela\n\t\t\t");
      a4 = element("a");
      t27 = text("Universidade Federal do Paraná");
      t28 = text(", onde também trabalhei em projetos de pesquisa do\n\t\t\t");
      a5 = element("a");
      t29 = text("C3SL");
      t30 = text(", na área de\n\t\t\tdesenvolvimento de ");
      em3 = element("em");
      t31 = text("software");
      t32 = text(".");
      t33 = space();
      div1 = element("div");
      a6 = element("a");
      i0 = element("i");
      t34 = space();
      a7 = element("a");
      i1 = element("i");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1ine71f\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {
        id: true,
        class: true
      });
      var section_nodes = children(section);
      div2 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      h1 = claim_element(div2_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Marcos\n\t\t\t");
      span = claim_element(h1_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t2 = claim_text(span_nodes, "Zaghetto");
      span_nodes.forEach(detach_dev);
      h1_nodes.forEach(detach_dev);
      t3 = claim_space(div2_nodes);
      div0 = claim_element(div2_nodes, "DIV", {
        class: true,
        style: true
      });
      var div0_nodes = children(div0);
      t4 = claim_text(div0_nodes, "Desenvolvedor Front-End");
      div0_nodes.forEach(detach_dev);
      t5 = claim_space(div2_nodes);
      p0 = claim_element(div2_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      t6 = claim_text(p0_nodes, "Atuo com Desenvolvimento PHP há mais de 10 anos e tenho uma grande\n\t\t\texperiência com Desenvolvimento Web em geral (");
      em0 = claim_element(p0_nodes, "EM", {});
      var em0_nodes = children(em0);
      t7 = claim_text(em0_nodes, "Full-Stack");
      em0_nodes.forEach(detach_dev);
      t8 = claim_text(p0_nodes, "),\n\t\t\ttrabalhando com tecnologias como PHP, ");
      em1 = claim_element(p0_nodes, "EM", {});
      var em1_nodes = children(em1);
      t9 = claim_text(em1_nodes, "Framework");
      em1_nodes.forEach(detach_dev);
      t10 = claim_text(p0_nodes, " Laravel, MySQL, PostgreSQL,\n\t\t\tHTML, CSS, JavaScript, jQuery, Bootstrap e outras.");
      p0_nodes.forEach(detach_dev);
      t11 = claim_space(div2_nodes);
      p1 = claim_element(div2_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t12 = claim_text(p1_nodes, "Sou autor do ");
      a0 = claim_element(p1_nodes, "A", {
        href: true,
        target: true
      });
      var a0_nodes = children(a0);
      t13 = claim_text(a0_nodes, "Blog do Beraldo");
      a0_nodes.forEach(detach_dev);
      t14 = claim_text(p1_nodes, ", onde publico conteúdos sobre Programação desde 2009.");
      p1_nodes.forEach(detach_dev);
      t15 = claim_space(div2_nodes);
      p2 = claim_element(div2_nodes, "P", {
        class: true
      });
      var p2_nodes = children(p2);
      t16 = claim_text(p2_nodes, "Também sou autor e instrutor do ");
      a1 = claim_element(p2_nodes, "A", {
        href: true,
        target: true
      });
      var a1_nodes = children(a1);
      t17 = claim_text(a1_nodes, "Curso ULTIMATE PHP");
      a1_nodes.forEach(detach_dev);
      t18 = claim_text(p2_nodes, ", curso ");
      em2 = claim_element(p2_nodes, "EM", {});
      var em2_nodes = children(em2);
      t19 = claim_text(em2_nodes, "online");
      em2_nodes.forEach(detach_dev);
      t20 = claim_text(p2_nodes, " destinado para iniciantes em PHP, com o objetivo\n\t\t\tde formar profissionais qualificados para o Mercado de Trabalho. Também\n\t\t\tcriei o\n\t\t\t");
      a2 = claim_element(p2_nodes, "A", {
        href: true,
        target: true
      });
      var a2_nodes = children(a2);
      t21 = claim_text(a2_nodes, "Blog do ULTIMATE PHP");
      a2_nodes.forEach(detach_dev);
      t22 = claim_text(p2_nodes, ", com conteúdos básicos sobre PHP.");
      p2_nodes.forEach(detach_dev);
      t23 = claim_space(div2_nodes);
      p3 = claim_element(div2_nodes, "P", {
        class: true
      });
      var p3_nodes = children(p3);
      t24 = claim_text(p3_nodes, "Sou graduado em ");
      a3 = claim_element(p3_nodes, "A", {
        href: true,
        target: true
      });
      var a3_nodes = children(a3);
      t25 = claim_text(a3_nodes, "Ciência da Computação");
      a3_nodes.forEach(detach_dev);
      t26 = claim_text(p3_nodes, ", pela\n\t\t\t");
      a4 = claim_element(p3_nodes, "A", {
        href: true,
        target: true
      });
      var a4_nodes = children(a4);
      t27 = claim_text(a4_nodes, "Universidade Federal do Paraná");
      a4_nodes.forEach(detach_dev);
      t28 = claim_text(p3_nodes, ", onde também trabalhei em projetos de pesquisa do\n\t\t\t");
      a5 = claim_element(p3_nodes, "A", {
        href: true,
        target: true
      });
      var a5_nodes = children(a5);
      t29 = claim_text(a5_nodes, "C3SL");
      a5_nodes.forEach(detach_dev);
      t30 = claim_text(p3_nodes, ", na área de\n\t\t\tdesenvolvimento de ");
      em3 = claim_element(p3_nodes, "EM", {});
      var em3_nodes = children(em3);
      t31 = claim_text(em3_nodes, "software");
      em3_nodes.forEach(detach_dev);
      t32 = claim_text(p3_nodes, ".");
      p3_nodes.forEach(detach_dev);
      t33 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      a6 = claim_element(div1_nodes, "A", {
        href: true,
        target: true,
        title: true
      });
      var a6_nodes = children(a6);
      i0 = claim_element(a6_nodes, "I", {
        class: true
      });
      children(i0).forEach(detach_dev);
      a6_nodes.forEach(detach_dev);
      t34 = claim_space(div1_nodes);
      a7 = claim_element(div1_nodes, "A", {
        href: true,
        target: true,
        title: true
      });
      var a7_nodes = children(a7);
      i1 = claim_element(a7_nodes, "I", {
        class: true
      });
      children(i1).forEach(detach_dev);
      a7_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "About";
      attr_dev(span, "class", "text-primary");
      add_location(span, file, 8, 3, 187);
      attr_dev(h1, "class", "mb-0 svelte-1e4kzt3");
      add_location(h1, file, 6, 2, 156);
      attr_dev(div0, "class", "subheading mb-5");
      set_style(div0, "text-transform", "uppercase");
      set_style(div0, "font-weight", "500");
      set_style(div0, "font-family", "'Saira Extra Condensed',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'");
      set_style(div0, "font-size", "1.5rem");
      set_style(div0, "letter-spacing", ".12em");
      add_location(div0, file, 10, 2, 240);
      add_location(em0, file, 22, 49, 770);
      add_location(em1, file, 23, 41, 833);
      attr_dev(p0, "class", "lead mb-2 svelte-1e4kzt3");
      add_location(p0, file, 20, 2, 629);
      attr_dev(a0, "href", "https://rberaldo.com.br/");
      attr_dev(a0, "target", "_blank");
      add_location(a0, file, 27, 16, 981);
      attr_dev(p1, "class", "lead mb-2 svelte-1e4kzt3");
      add_location(p1, file, 26, 2, 943);
      attr_dev(a1, "href", "http://www.ultimatephp.com.br/curso");
      attr_dev(a1, "target", "_blank");
      add_location(a1, file, 32, 35, 1181);
      add_location(em2, file, 35, 12, 1285);
      attr_dev(a2, "href", "http://blog.ultimatephp.com.br/");
      attr_dev(a2, "target", "_blank");
      add_location(a2, file, 38, 3, 1439);
      attr_dev(p2, "class", "lead mb-2 svelte-1e4kzt3");
      add_location(p2, file, 31, 2, 1124);
      attr_dev(a3, "href", "https://web.inf.ufpr.br/bcc/");
      attr_dev(a3, "target", "_blank");
      add_location(a3, file, 43, 19, 1615);
      attr_dev(a4, "href", "https://www.ufpr.br");
      attr_dev(a4, "target", "_blank");
      add_location(a4, file, 46, 3, 1714);
      attr_dev(a5, "href", "https://www.c3sl.ufpr.br/");
      attr_dev(a5, "target", "_blank");
      add_location(a5, file, 49, 3, 1857);
      add_location(em3, file, 50, 22, 1952);
      attr_dev(p3, "class", "lead mb-2 svelte-1e4kzt3");
      add_location(p3, file, 42, 2, 1574);
      attr_dev(i0, "class", "fab fa-linkedin-in");
      add_location(i0, file, 56, 21, 2115);
      attr_dev(a6, "href", "https://www.linkedin.com/in/marcos-zaghetto/");
      attr_dev(a6, "target", "_blank");
      attr_dev(a6, "title", "LinkedIn");
      add_location(a6, file, 53, 3, 2015);
      attr_dev(i1, "class", "fab fa-github");
      add_location(i1, file, 59, 5, 2235);
      attr_dev(a7, "href", "https://github.com/jrzaghetto");
      attr_dev(a7, "target", "_blank");
      attr_dev(a7, "title", "Github");
      add_location(a7, file, 58, 3, 2159);
      attr_dev(div1, "class", "social-icons mt-5");
      add_location(div1, file, 52, 2, 1980);
      attr_dev(div2, "class", "w-100");
      add_location(div2, file, 5, 1, 134);
      attr_dev(section, "id", "about");
      attr_dev(section, "class", "resume-section p-3 p-lg-5 d-flex align-items-center");
      add_location(section, file, 4, 0, 52);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, div2);
      append_dev(div2, h1);
      append_dev(h1, t1);
      append_dev(h1, span);
      append_dev(span, t2);
      append_dev(div2, t3);
      append_dev(div2, div0);
      append_dev(div0, t4);
      append_dev(div2, t5);
      append_dev(div2, p0);
      append_dev(p0, t6);
      append_dev(p0, em0);
      append_dev(em0, t7);
      append_dev(p0, t8);
      append_dev(p0, em1);
      append_dev(em1, t9);
      append_dev(p0, t10);
      append_dev(div2, t11);
      append_dev(div2, p1);
      append_dev(p1, t12);
      append_dev(p1, a0);
      append_dev(a0, t13);
      append_dev(p1, t14);
      append_dev(div2, t15);
      append_dev(div2, p2);
      append_dev(p2, t16);
      append_dev(p2, a1);
      append_dev(a1, t17);
      append_dev(p2, t18);
      append_dev(p2, em2);
      append_dev(em2, t19);
      append_dev(p2, t20);
      append_dev(p2, a2);
      append_dev(a2, t21);
      append_dev(p2, t22);
      append_dev(div2, t23);
      append_dev(div2, p3);
      append_dev(p3, t24);
      append_dev(p3, a3);
      append_dev(a3, t25);
      append_dev(p3, t26);
      append_dev(p3, a4);
      append_dev(a4, t27);
      append_dev(p3, t28);
      append_dev(p3, a5);
      append_dev(a5, t29);
      append_dev(p3, t30);
      append_dev(p3, em3);
      append_dev(em3, t31);
      append_dev(p3, t32);
      append_dev(div2, t33);
      append_dev(div2, div1);
      append_dev(div1, a6);
      append_dev(a6, i0);
      append_dev(div1, t34);
      append_dev(div1, a7);
      append_dev(a7, i1);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("About", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<About> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var About = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(About, _SvelteComponentDev);

  var _super = _createSuper(About);

  function About(options) {
    var _this;

    _classCallCheck(this, About);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "About",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return About;
}(SvelteComponentDev);

export default About;
