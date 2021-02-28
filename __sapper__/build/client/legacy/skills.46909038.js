import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, h as space, g as element, t as text, B as query_selector_all, m as detach_dev, n as claim_space, j as claim_element, k as children, l as claim_text, o as attr_dev, p as add_location, u as insert_dev, w as append_dev, y as _slicedToArray, x as noop, f as validate_slots } from './client.9715eea3.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/skills.svelte";

function create_fragment(ctx) {
  var title_value;
  var t0;
  var p;
  var t1;
  document.title = title_value =
  /*title*/
  ctx[0];
  var block = {
    c: function create() {
      t0 = space();
      p = element("p");
      t1 = text(
      /*title*/
      ctx[0]);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1258swp\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      p = claim_element(nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t1 = claim_text(p_nodes,
      /*title*/
      ctx[0]);
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p, "class", "svelte-tzuc7l");
      add_location(p, file, 8, 0, 99);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, p, anchor);
      append_dev(p, t1);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*title*/
      1 && title_value !== (title_value =
      /*title*/
      ctx[0])) {
        document.title = title_value;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(p);
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

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Skills", slots, []);
  var title = "Skills";
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Skills> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      title: title
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("title" in $$props) $$invalidate(0, title = $$props.title);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [title];
}

var Skills = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Skills, _SvelteComponentDev);

  var _super = _createSuper(Skills);

  function Skills(options) {
    var _this;

    _classCallCheck(this, Skills);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Skills",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Skills;
}(SvelteComponentDev);

export default Skills;
