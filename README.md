# react-L
## Components
Component is like a shortening dump your code and make it more modularize so that you have individual control on each component like cards, eventually we can loop through the card ganerate hunderd of cards a naviagation bar, footer and all of this ..

## State
State is a unique thing in the react which simply just is getting constantly monitored and any change in the state rerenders the UI on the web page..

## CSS Properties in React 
### Container and Layout 
const App = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Welcome to Tailwind CSS</h1>
          <p className="text-gray-700">This is a basic example of using Tailwind CSS with React.</p>
        </div>
      </div>
    </div>
  );
};

### Text and Font
const App = () => {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Tailwind CSS with React</h1>
      <p className="text-lg text-gray-700">This is an example of text styling.</p>
      <p className="text-sm text-red-500 mt-2">This is another text example.</p>
    </div>
  );
};

### Spacing (Margin and Padding)
const App = () => {
  return (
    <div className="p-4">
      <div className="m-4 p-4 bg-gray-100 rounded">
        <p className="mb-4">This is an example of margin and padding.</p>
        <p className="mt-4">More content with margin top.</p>
      </div>
    </div>
  );
};

### Flexbox and Grid
const App = () => {
  return (
    <div className="p-4">
      <div className="flex space-x-4">
        <div className="flex-1 bg-red-100 p-4">Flex Item 1</div>
        <div className="flex-1 bg-green-100 p-4">Flex Item 2</div>
        <div className="flex-1 bg-blue-100 p-4">Flex Item 3</div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-yellow-100 p-4">Grid Item 1</div>
        <div className="bg-purple-100 p-4">Grid Item 2</div>
        <div className="bg-pink-100 p-4">Grid Item 3</div>
      </div>
    </div>
  );
};


### Hover, Focus, and Responsive Variants
const App = () => {
  return (
    <div className="p-4">
      <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
        Hover and Focus Example
      </button>
      <div className="mt-4">
        <div className="bg-red-500 text-white p-4 rounded md:bg-green-500 lg:bg-blue-500">
          Responsive Example
        </div>
      </div>
    </div>
  );
};
