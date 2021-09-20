
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import Loading from '../loading/loading';

function Results(props) {

  return (
    <section>
      {props.data ? <div>
        <h2>Headers</h2>
        <JSONPretty id="json-pretty" data={props.data ? props.data.headers : null}></JSONPretty>
        <h2>Results</h2>
        <JSONPretty id="json-pretty" data={props.data ? props.data.data : null}></JSONPretty>
      </div> : <Loading />}
    </section>
  );

}

export default Results;