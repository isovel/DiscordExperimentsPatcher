
/* ———————————————————— Copyright (c) 2022 toastythetoaster ————————————————————
 *
 * Discord Experiments Patcher "Theme"
 *
 * ————————————————————————————————————————————————————————————————————————————— */

export default {
  attach: () => Astra.Patcher.before('DiscordExperimentsPatcher', Astra.Webpack.FluxDispatcher, 'dispatch', (_, args) => {
    args[0].type === 'CONNECTION_OPEN' && (args[0].user.flags += 1);
    return args;
  }),
  detach: () => Astra.Patcher.unpatchAll('DiscordExperimentsPatcher')
};
