#!/usr/bin/env node

/**
 * repocreate
 * A command line tool to create repositories and push them to Github
 *
 * @author Guillermo Brachetta <https://brachetta.com>
 */

import init from './utils/init.js';
import cli from './utils/cli.js';
import log from './utils/log.js';

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);
})();
