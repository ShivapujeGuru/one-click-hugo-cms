import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
  render() {
    const { entry, widgetFor, getAsset } = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    return <div class="city-with-rupeek">
      <h1>{entry.getIn(["data", "title"])}</h1>
      <div class="meta-data">
        <p>{entry.getIn(["data", "description"])}</p>

        {widgetFor("body")}
        <ul class="three-Fs">
          <li>
            <h4>Fair</h4>
          Choose from our range of low-interest loans as
          per the &lt;gold rate in Bangalore&gt; with the zero
          hidden charges, with the help of our interest rate
          calculator.
        </li>
          <li>
            <h4>Fast</h4>
          Get instant loan disbursal within 30 minutes
        </li>
          <li>
            <h4>Flexible</h4>
          Repay the loan amount in monthly installments
          or within a single shot
        </li>
        </ul>
      </div>
    </div>;

  }
}










{/* <section class="city-with-rupeek">
  <h1>{ entry.getIn(["data", "title"])}</h1>
  <div class="meta-data">
    <p>{ entry.getIn(["data", "description"]) }</p>
    <br>
    { widgetFor("body") }
    <ul class="three-Fs">
      <li>
        <h4>Fair</h4>
        Choose from our range of low-interest loans as
        per the &lt;gold rate in Bangalore&gt; with the zero
        hidden charges, with the help of our interest rate
        calculator.
      </li>
      <li>
        <h4>Fast</h4>
        Get instant loan disbursal within 30 minutes
      </li>
      <li>
        <h4>Flexible</h4>
        Repay the loan amount in monthly installments
        or within a single shot
      </li>
    </ul>
  </div>
</section> */}