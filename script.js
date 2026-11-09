  const radios = document.querySelectorAll('.pick');
  const audios = document.querySelectorAll('.slide audio');

  console.log('radios:', radios.length, 'audios:', audios.length);

  radios.forEach((radio, i) => {
    radio.addEventListener('change', () => {
      console.log('picked song', i + 1);

      audios.forEach(a => {
        a.pause();
        a.currentTime = 0;
      });

      audios[i].play().catch(err => {
        console.error('Could not play song', i + 1, err);
      });
    });
  });