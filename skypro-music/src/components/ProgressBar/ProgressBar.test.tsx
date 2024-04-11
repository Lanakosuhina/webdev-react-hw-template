import renderer from "react-test-renderer";
import { ProgressBar } from ".";

describe('Компонент полоса прогресса', () => {
  it('корректно отрисовывает разметку с начальными значениями', () => {
    const mockSetCurrentProgress = jest.fn();
    const mockHandleDuration = jest.fn();
    const component = renderer.create(<ProgressBar
      currentProgress={0}
      duration={100}
      handleDuration={mockHandleDuration}
      setCurrentProgress={mockSetCurrentProgress}
    />).toJSON();
    expect(component).toMatchSnapshot();
  });
});