import {WATCH_PARQUIM_METER} from './actionTypes';
import {PubSub} from '@google-cloud/pubsub';

export const watchParquim = () => dispatch => {
  const pubsub = new PubSub({projectId: 'directed-will-245201'});
  const subscription = pubsub.subscription(
    'projects/directed-will-245201/subscriptions/testCloud',
  );
  subscription.on('message', message => {
    dispatch({
      type: WATCH_PARQUIM_METER,
      payload: JSON.parse(message.data),
    });

    message.ack();
  });
};
