const portableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-gray-700 text-lg leading-9 mb-8">
        {children}
      </p>
    ),

    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-gray-900 mt-16 mb-8">
        {children}
      </h1>
    ),

    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-6">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">
        {children}
      </h3>
    ),

    h4: ({ children }) => (
      <h4 className="text-xl font-semibold text-gray-900 mt-8 mb-3">
        {children}
      </h4>
    ),

    blockquote: ({ children }) => (
      <blockquote
        className="
          border-l-4
          border-amber-600
          pl-6
          py-2
          my-8
          italic
          text-gray-600
        "
      >
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-8 mb-8 space-y-3 text-gray-700">
        {children}
      </ul>
    ),

    number: ({ children }) => (
      <ol className="list-decimal pl-8 mb-8 space-y-3 text-gray-700">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }) => (
      <li className="leading-8">
        {children}
      </li>
    ),

    number: ({ children }) => (
      <li className="leading-8">
        {children}
      </li>
    ),
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900">
        {children}
      </strong>
    ),

    em: ({ children }) => (
      <em className="italic">
        {children}
      </em>
    ),

    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          text-amber-700
          font-medium
          underline
          underline-offset-4
          hover:text-amber-800
          transition-colors
        "
      >
        {children}
      </a>
    ),
  },
};

export default portableTextComponents;