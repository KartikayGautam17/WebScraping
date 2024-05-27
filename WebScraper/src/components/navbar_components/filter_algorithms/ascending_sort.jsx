/**
 *
 * @param {Array} Widgets
 * @param {function} SetWidgets
 *
 */
function DescendSort(Widgets, SetWidgets) {
  const clone = [...Widgets];
  clone.sort((a, b) => {
    let ans;
    try {
      let a_ = a.props.price.replaceAll(",", "");
      let b_ = b.props.price.replaceAll(",", "");
      ans = a_ - b_;
    } catch {
      ans = -1;
      console.log("Not ready");
      console.log(a.props, b.props);
    }
    return ans;
  });
  SetWidgets(clone);
  console.log(clone);
}

export default DescendSort;
