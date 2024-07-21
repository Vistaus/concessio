import 'gi://Gdk?version=4.0';
import 'gi://Gtk?version=4.0';
import 'gi://Adw?version=1';

import { CncApplication } from './Application.js'

export function main(argv) {
    return new CncApplication({
        'application-id': pkg.name
    }).run(argv)
}