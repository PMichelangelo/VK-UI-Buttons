import { Button } from "./components/Button/Button"
import './components/style.css'



const App = () => (
  <div>
    <h1>Hello VK</h1>
    <table>
      <thead>
        <tr>
          <th>ClassName</th>
          <th>Small</th>
          <th></th>
          <th>Medium</th>
          <th></th>
          <th>Large</th>
          <th></th>
          <th></th>
          <th></th>
          <th>Medium · Fixed Layout</th>
          <th>Large · Fixed Layout</th>
          <th>Disabled</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Primary</td>
          <td><Button size="s" variant="primary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="primary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="m" variant="primary" streched onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="m" variant="primary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="primary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="primary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="primary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="primary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="primary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="primary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="primary" disabled onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="primary" disabled onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="m" variant="primary" disabled onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="primary" disabled onClick={() => alert("123")}>Button</Button></td>
        </tr>
        <tr>
          <td>Secondary</td>
          <td><Button size="s" variant="secondary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="secondary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="m" variant="secondary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="m" variant="secondary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="secondary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="secondary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="secondary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="secondary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="secondary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="secondary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="secondary" disabled onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="secondary" disabled onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="m" variant="secondary" disabled onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="secondary" disabled onClick={() => alert("123")}>Button</Button></td>
        </tr>
        <tr>
          <td>Muted</td>
          <td><Button size="s" variant="muted" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="muted" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="m" variant="muted" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="m" variant="muted" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="muted" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="muted" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="muted" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="muted" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="muted" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="muted" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="muted" disabled onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="muted" disabled onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="m" variant="muted" disabled onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="muted" disabled onClick={() => alert("123")}>Button</Button></td>
        </tr>
        <tr>
          <td>Tertiary</td>
          <td><Button size="s" variant="tertiary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="tertiary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="m" variant="tertiary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="m" variant="tertiary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="tertiary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="tertiary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="tertiary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="tertiary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="tertiary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="tertiary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="tertiary" disabled onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="tertiary" disabled onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="m" variant="tertiary" disabled onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="tertiary" disabled onClick={() => alert("123")}>Button</Button></td>
        </tr>
        <tr>
          <td>Outline</td>
          <td><Button size="s" variant="outline" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="outline" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="m" variant="outline" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="m" variant="outline" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="outline" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="outline" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="outline" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="outline" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="outline" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="outline" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="outline" disabled onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="outline" disabled onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="m" variant="outline" disabled onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="outline" disabled onClick={() => alert("123")}>Button</Button></td>

        </tr>
        <tr>
          <td>Commerce</td>
          <td><Button size="s" variant="commerce" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="commerce" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="m" variant="commerce" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="m" variant="commerce" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="commerce" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="commerce" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="commerce" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="commerce" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="commerce" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="commerce" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="commerce" disabled onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="commerce" disabled onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="m" variant="commerce" disabled onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="commerce" disabled onClick={() => alert("123")}>Button</Button></td>
        </tr>
        <tr>
          <td>Overlay-primary</td>
          <td><Button size="s" variant="overlay-primary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="overlay-primary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="m" variant="overlay-primary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="m" variant="overlay-primary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="overlay-primary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="overlay-primary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="overlay-primary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="overlay-primary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="overlay-primary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="overlay-primary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="overlay-primary" disabled onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="overlay-primary" disabled onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="m" variant="overlay-primary" disabled onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="overlay-primary" disabled onClick={() => alert("123")}>Button</Button></td>
        </tr>
        <tr>
          <td>Overlay-secondary</td>
          <td><Button size="s" variant="overlay-secondary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="overlay-secondary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="m" variant="overlay-secondary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="m" variant="overlay-secondary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="overlay-secondary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="overlay-secondary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="overlay-secondary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="overlay-secondary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="overlay-secondary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="overlay-secondary" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="overlay-secondary" disabled onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="overlay-secondary" disabled onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="m" variant="overlay-secondary" disabled onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="overlay-secondary" disabled onClick={() => alert("123")}>Button</Button></td>
        </tr>
        <tr>
          <td>Overlay-outline</td>
          <td><Button size="s" variant="overlay-outline" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="overlay-outline" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="m" variant="overlay-outline" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="m" variant="overlay-outline" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="overlay-outline" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="overlay-outline" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="overlay-outline" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="overlay-outline" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="overlay-outline" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="overlay-outline" onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="overlay-outline" disabled onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="s" variant="overlay-outline" disabled onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="m" variant="overlay-outline" disabled onClick={() => alert("123")}>Button</Button></td>
          <td><Button size="l" variant="overlay-outline" disabled onClick={() => alert("123")}>Button</Button></td>
        </tr>
      </tbody>
    </table>
    <div class='wrapper'>
      <Button size="s" variant="primary" onClick={() => alert("123")}>Button</Button>
      <Button size="s" variant="secondary" class="red" onClick={() => alert("123")}>Button</Button>
      <Button size="s" variant="muted" class="red" onClick={() => alert("123")}>Button</Button>
      <Button size="s" variant="tertiary" class="red" onClick={() => alert("123")}>Button</Button>
      <Button size="s" variant="outline" class="red" onClick={() => alert("123")}>Button</Button>
      <Button size="s" variant="commerce" class="red" onClick={() => alert("123")}>Button</Button>
      <Button size="s" variant="overlay-primary" class="red" onClick={() => alert("123")}>Button</Button>
      <Button size="s" variant="overlay-secondary" class="red" onClick={() => alert("123")}>Button</Button>
      <Button size="s" variant="overlay-outline" class="red" onClick={() => alert("123")}>Button</Button>

    </div>

  </div>
)



export default App

