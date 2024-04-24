const card = await page.evaluate(() =>
  document.getElementsByClassName(
    "sg-col-20-of-24 s-result-item s-asin sg-col-0-of-12 sg-col-16-of-20 sg-col s-widget-spacing-small sg-col-12-of-16"
  )
);
if (card.length != 0)
  for (let i = 0; i < 5; i += 1) {
    const res_card = await page.evaluate(() => {
      let element = card[0].getElementsByClassName("sg-col-inner")[0];
      const img = element
        .getElementsByClassName("s-image")[0]
        .getAttribute("src");

      const title = element.getElementsByClassName(
        "a-size-medium a-color-base a-text-normal"
      )[0].innerHTML;

      const price =
        element.getElementsByClassName("a-price-symbol")[0].innerHTML +
        element.getElementsByClassName("a-price-whole")[0].innerHTML;

      return { title, price, img };
    });
  }
