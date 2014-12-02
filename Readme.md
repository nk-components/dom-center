
# dom-center

  Centre a DOM element relative to another container

## Installation

  Install with [component(1)](http://component.io):

    $ component install nk-components/dom-center


  With npm:

    $ npm i -S nk-dom-center


## API

### center(target, container, renderer)

* target: Element that will be centred.
* container: [optional] By default it uses `window` as container
* renderer: [optional]
  * `undefined`: centre the target using `transform` property
  * `false`: the fn returns the position `{ x: Number, y: Number }`
  * `Function`: the fn calls the custom renderer. `renderer(target, position)`

### center.x(target, container, renderer)

### center.y(target, container, renderer)

## License

  The MIT License (MIT)

  Copyright (c) 2014

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
