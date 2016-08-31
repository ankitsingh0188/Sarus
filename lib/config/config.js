/**
 * Configure Your Server here
 */

//Port on which the application should be running
exports.Port = 26192 ;

//Url to fetch feeds from
exports.Feed_url = 'https://srijan.atlassian.net/wiki/createrssfeed.action?types=page&pageSubTypes=attachment&spaces=drupal&title=Confluence+RSS+Feed&labelString%3D&excludedSpaceKeys=ADB&excludedSpaceKeys=Asian&excludedSpaceKeys=AKA&excludedSpaceKeys=AKDN&excludedSpaceKeys=BAS&excludedSpaceKeys=CD&excludedSpaceKeys=ds&excludedSpaceKeys=DP&excludedSpaceKeys=DT&excludedSpaceKeys=EM&excludedSpaceKeys=FCBRP&excludedSpaceKeys=FCFP&excludedSpaceKeys=GM&excludedSpaceKeys=GPRE&excludedSpaceKeys=HTUD&excludedSpaceKeys=IF&excludedSpaceKeys=MOAUS&excludedSpaceKeys=ONT&excludedSpaceKeys=OR&excludedSpaceKeys=PER&excludedSpaceKeys=PROS&excludedSpaceKeys=RA&excludedSpaceKeys=SAYAL&excludedSpaceKeys=SA&excludedSpaceKeys=SB&excludedSpaceKeys=SRIJ&excludedSpaceKeys=SG&excludedSpaceKeys=SD&excludedSpaceKeys=SRD8&excludedSpaceKeys=SD8&excludedSpaceKeys=STRD&excludedSpaceKeys=STAP&excludedSpaceKeys=tech&excludedSpaceKeys=TRRYB&excludedSpaceKeys=TD&excludedSpaceKeys=TWEET&excludedSpaceKeys=UX&excludedSpaceKeys=VP&excludedSpaceKeys=ZEN&sort=modified&maxResults=20&timeSpan=10&showContent=true&confirm=Create+RSS+Feed&os_authType=basic';
// exports.Feed_url = 'http://www.srijan.net/blog/feed';
//Time interval for db to auto refresh
exports.TimeInterval = 1; //in hours

//Database Url
exports.DBUrl = 'mongodb://localhost:27017/sarus_dev';

