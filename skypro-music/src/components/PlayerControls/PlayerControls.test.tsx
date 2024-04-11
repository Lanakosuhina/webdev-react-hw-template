// тест не проходит
// could not find react-redux context value; please ensure the component is wrapped in a <Provider>


import renderer from "react-test-renderer";
import { PlayerControls } from ".";

describe("Компонент управления плеером", () => {
  const mockHandleLoop = jest.fn();
  const mockTogglePlay = jest.fn();

  it("корректно осуществляет зацикливание треков", () => {
    const component = renderer
      .create(<PlayerControls 
          handleLoop={mockHandleLoop}
          isLooping={true} 
          togglePlay={mockTogglePlay}
          isPlaying={true}
        />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

});