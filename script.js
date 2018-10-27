// var GalleryItem = React.createClass({
//     propTypes: {
//       image: React.PropTypes.object.isRequired,
//     },
  
//     render: function() {
//       return (
//         React.createElement('div', {},
//           React.createElement('h2', {}, this.props.image.name),
//           React.createElement('img', {src: this.props.image.src}),
//           React.createElement('p', {}, this.props.image.desc)
//         )
//       )
//     },
//   });
  
//   var image = {
//     name: 'Kotek',
//     src: 'http://imgur.com/n8OYCzR.png',
//     desc: 'Kot czystej rasy europejskiej'
//   };
  
//   var element = React.createElement(GalleryItem, {image: image});
// ReactDOM.render(element, document.getElementById('app'));

var movies = [
  {
      id: 1,
      title: 'Harry Potter',
      desc: 'film o czardzieju',
      cast: 'Występują: Imie Nazwisko, Imie Nazwisko',
      image: 'http://s3.viva.pl/newsy/plakat-filmu-harry-potter-zakon-feniksagalapagos-films-429093-movie_cover.jpg'
  },
  {
      id: 2,
      title: 'Król lew',
      desc: 'film o królu sawanny',
      cast: 'Występują: Imie Nazwisko, Imie Nazwisko',
      image: 'https://musicimage.xboxlive.com/catalog/video.movie.8D6KGWXJKRXT/image?locale=fr-ca&mode=crop&purposes=BoxArt&q=90&h=300&w=200&format=jpg'
  },
  {
      id: 3,
      title: 'Terminator',
      desc: 'film o terminatorze',
      cast: 'Występują: Imie Nazwisko, Imie Nazwisko',
      image: 'https://images-na.ssl-images-amazon.com/images/I/51JxcK1PzrL._SY445_.jpg'
  }
];

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },
  render: function() {
    return (
      React.createElement('h2', {}, this.props.title)
    );
  }
});

var MovieDesc = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },
  render: function() {
    return (
      React.createElement('p', {}, this.props.desc)
    );
  }
});

var MovieCast = React.createClass({
  propTypes: {
    cast: React.PropTypes.string.isRequired,
  },
  render: function() {
    return (
      React.createElement('p', {}, this.props.cast)
    );
  }
});

var MovieImage = React.createClass({
  propTypes: {
    image: React.PropTypes.string.isRequired,
  },
  render: function() {
    return (
      React.createElement('img', {src: this.props.image})
    );
  }
});

var Movie = React. createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement('li', {src: this.props.movie.id},
        React.createElement(MovieTitle, {title: this.props.movie.title}),
        React.createElement(MovieDesc, {desc: this.props.movie.desc}),
        React.createElement(MovieCast, {cast: this.props.movie.cast}),
        React.createElement(MovieImage, {image: this.props.movie.image})
      )
    );
  }
});

var movieList = movies.map(function(movie) {
  return React.createElement(Movie, {key: movie.id, movie: movie});
});

var element = React.createElement('div', {},
  React.createElement('h1', {}, 'Lista Filmów'),
  React.createElement('ul', {}, movieList)
  );

ReactDOM.render(element, document.getElementById('app'));