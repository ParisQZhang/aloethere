module.exports = {
  up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});\
    db.collection('plants').insertMany([
      {
          "scientificName": "Epipremnum aureum",
          "commonName": "Devil's ivy",
          "type": "Hanging plants",
          "difficulty": "Low",
          "light": "Low",
          "water": "7 days",
          "humidity": "High",
          "airPurifying": true,
          "imgUrl": "https://res.cloudinary.com/drzqogulr/image/upload/v1596813924/AloeThere_Plants/5f2471705572f9fefa8218ad_f8pf2o.jpg",
          "__v": 0
      },
      {
          "scientificName": "Sansevieria trifasciata",
          "commonName": "Snake plant",
          "type": "Cacti and succulents",
          "difficulty": "Low",
          "light": "Low",
          "water": "14 days",
          "humidity": "Low",
          "airPurifying": true,
          "imgUrl": "https://res.cloudinary.com/drzqogulr/image/upload/v1596813923/AloeThere_Plants/5f2471ee5572f9fefa8218ae_ujogrf.jpg",
          "__v": 0
      },
      {
          "scientificName": "Pilea peperomioides",
          "commonName": "Chinese money plant",
          "type": "Cacti and succulents",
          "difficulty": "Medium",
          "light": "Medium",
          "water": "14 days",
          "humidity": "Low",
          "airPurifying": true,
          "imgUrl": "https://res.cloudinary.com/drzqogulr/image/upload/v1596813924/AloeThere_Plants/5f24726b5572f9fefa8218af_fustyg.jpg",
          "__v": 0
      },
      {
          "scientificName": "Ficus lyrata",
          "commonName": "Fiddle-leaf fig",
          "type": "Trees",
          "difficulty": "High",
          "light": "Medium",
          "water": "7 days",
          "humidity": "Medium",
          "airPurifying": true,
          "imgUrl": "https://res.cloudinary.com/drzqogulr/image/upload/v1596813923/AloeThere_Plants/5f2472ae5572f9fefa8218b0_kjjzm8.jpg",
          "__v": 0
      },
      {
          "scientificName": "Nephrolepis exaltata",
          "commonName": "Fern",
          "type": "Ferns",
          "difficulty": "High",
          "light": "Low",
          "water": "7 days",
          "humidity": "High",
          "airPurifying": true,
          "imgUrl": "https://res.cloudinary.com/drzqogulr/image/upload/v1596813923/AloeThere_Plants/5f2472ea5572f9fefa8218b1_ijoudi.jpg",
          "__v": 0
      },
      {
          "scientificName": "Howea forsteriana",
          "commonName": "Kentia palm",
          "type": "Palms",
          "difficulty": "Medium",
          "light": "Medium",
          "water": "7 days",
          "humidity": "Medium",
          "airPurifying": true,
          "imgUrl": "https://res.cloudinary.com/drzqogulr/image/upload/v1596813924/AloeThere_Plants/5f2475664a116e019807674a_zaascn.jpg",
          "__v": 0
      },
      {
          "scientificName": "Epipremnum aureum neon",
          "commonName": "Neon pothos",
          "type": "Hanging plants",
          "difficulty": "Low",
          "light": "Low",
          "water": "7 days",
          "humidity": "High",
          "airPurifying": true,
          "imgUrl": "https://res.cloudinary.com/drzqogulr/image/upload/v1596813924/AloeThere_Plants/5f24760f4a116e019807674b_kqvgh5.jpg",
          "__v": 0
      },
      {
          "scientificName": "Asparagus setaceus",
          "commonName": "Asparagus fern",
          "type": "Ferns",
          "difficulty": "High",
          "light": "Low",
          "water": "7 days",
          "humidity": "High",
          "airPurifying": true,
          "imgUrl": "https://res.cloudinary.com/drzqogulr/image/upload/v1596813923/AloeThere_Plants/5f2476c64a116e019807674c_lrgosc.jpg",
          "__v": 0
      },
      {
          "scientificName": "Citrus limon",
          "commonName": "Lemon tree",
          "type": "Trees",
          "difficulty": "Medium",
          "light": "High",
          "water": "7 days",
          "humidity": "Low",
          "airPurifying": false,
          "imgUrl": "https://res.cloudinary.com/drzqogulr/image/upload/v1596813923/AloeThere_Plants/5f2477e14a116e019807674d_dfjwab.jpg",
          "__v": 0
      },
      {
          "scientificName": "Chamaedorea elegans",
          "commonName": "Parlour palm",
          "type": "Palms",
          "difficulty": "Medium",
          "light": "Medium",
          "water": "7 days",
          "humidity": "Medium",
          "airPurifying": true,
          "imgUrl": "https://res.cloudinary.com/drzqogulr/image/upload/v1596813924/AloeThere_Plants/5f24786a4a116e019807674e_mx0qnf.jpg",
          "__v": 0
      }
  ])
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
    
    db.collection('plants').deleteMany({})
  }
};

// to run migrations => migrate-mongo up
// migrate-mongo down
