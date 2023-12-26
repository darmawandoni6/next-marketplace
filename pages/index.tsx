import { wrapper } from '@store/index';
import postAction from '@store/post/actions';
import Home from '@views/Home';

function index() {
  return <Home />;
}

index.getInitialProps = wrapper.getInitialPageProps(({ dispatch }) => async () => {
  await dispatch(postAction.fetchData({}));
});

export default index;
