
const API_KEY = "0015becf1661591597d5a25f8054eb90";

const requests = {
    fetchPopularity: `/discover/movie?primary_release_year=2010?sort_by=vote_average.desc&api_key=${API_KEY}`,
    fetchTop20Today: `/trending/all/day?api_key=${API_KEY}`,
    fetchTop20Week: `/trending/all/week?api_key=${API_KEY}`,
    fetchUpComing: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
}

export default requests;