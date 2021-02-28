import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, h as space, g as element, t as text, B as query_selector_all, m as detach_dev, n as claim_space, j as claim_element, k as children, l as claim_text, o as attr_dev, p as add_location, u as insert_dev, w as append_dev, x as noop, f as validate_slots } from './client.9715eea3.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/contact.svelte";

function create_fragment(ctx) {
  var t0;
  var p0;
  var t1;
  var t2;
  var br;
  var t3;
  var p1;
  var t4;
  var a;
  var t5;
  var block = {
    c: function create() {
      t0 = space();
      p0 = element("p");
      t1 = text("O site está em manutenção. Nos próximos dias estará 100%");
      t2 = space();
      br = element("br");
      t3 = space();
      p1 = element("p");
      t4 = text("Entre em contato através do e-mail: ");
      a = element("a");
      t5 = text("contato@mz.dev.br");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-mcvuxn\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      p0 = claim_element(nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "O site está em manutenção. Nos próximos dias estará 100%");
      p0_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      br = claim_element(nodes, "BR", {});
      t3 = claim_space(nodes);
      p1 = claim_element(nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t4 = claim_text(p1_nodes, "Entre em contato através do e-mail: ");
      a = claim_element(p1_nodes, "A", {
        href: true,
        class: true
      });
      var a_nodes = children(a);
      t5 = claim_text(a_nodes, "contato@mz.dev.br");
      a_nodes.forEach(detach_dev);
      p1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Contato";
      attr_dev(p0, "class", "svelte-tzuc7l");
      add_location(p0, file, 7, 0, 75);
      add_location(br, file, 8, 0, 139);
      attr_dev(a, "href", "mailto:contato@mz.dev.br");
      attr_dev(a, "class", "text-blue-400");
      add_location(a, file, 10, 38, 188);
      attr_dev(p1, "class", "svelte-tzuc7l");
      add_location(p1, file, 9, 0, 146);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, p0, anchor);
      append_dev(p0, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, br, anchor);
      insert_dev(target, t3, anchor);
      insert_dev(target, p1, anchor);
      append_dev(p1, t4);
      append_dev(p1, a);
      append_dev(a, t5);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(p0);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(br);
      if (detaching) detach_dev(t3);
      if (detaching) detach_dev(p1);
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
  validate_slots("Contact", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Contact> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var Contact = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Contact, _SvelteComponentDev);

  var _super = _createSuper(Contact);

  function Contact(options) {
    var _this;

    _classCallCheck(this, Contact);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Contact",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Contact;
}(SvelteComponentDev);

export default Contact;
