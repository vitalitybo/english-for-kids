import { states, statistic } from './statesObj';

export default function wipeCurrentProgress() {
  states.started = false;
  statistic.correctAnswersCount = 0;
  statistic.incorrectAnswersCount = 0;

  if (document.querySelector('.stars-block')) {
    document.querySelector('.stars-block').remove();
  }
}
