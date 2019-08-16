import ImageList from "../components/imageList";
import { connect } from "react-redux";

const mapStateToProps = state => {
  // state.imageUrls　の値を　urlList という名前で子コンポーネントに渡す
  return {
    urlList: state.imageUrls
  };
};

// connect
export default connect(
  mapStateToProps,
  null
)(ImageList);
