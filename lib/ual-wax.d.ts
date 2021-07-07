/**
 * UAL Wax v1.4.4
 * 
 * - Pack by 3DKRender Team
 * 
 * @license
 * MIT License
 * 
 * Copyright (c) 2020-present eosdac, pink.network and other contributors
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import { Authenticator, Chain, UALError, User } from 'universal-authenticator-library';
import { SignatureProvider } from 'eosjs/dist/eosjs-api-interfaces';

declare class Wax extends Authenticator {
    private wax?;
    private users;
    private initiated;
    private session?;
    private readonly apiSigner?;
    private waxSigningURL;
    private waxAutoSigningURL;
    constructor(chains: Chain[], options?: {
        apiSigner?: SignatureProvider;
        waxSigningURL?: string | undefined;
        waxAutoSigningURL?: string | undefined;
    });
    /**
     * Called after `shouldRender` and should be used to handle any async actions required to initialize the authenticator
     */
    init(): Promise<void>;
    /**
     * Resets the authenticator to its initial, default state then calls `init` method
     */
    reset(): void;
    /**
     * Returns true if the authenticator has errored while initializing.
     */
    isErrored(): boolean;
    /**
     * Returns a URL where the user can download and install the underlying authenticator
     * if it is not found by the UAL Authenticator.
     */
    getOnboardingLink(): string;
    /**
     * Returns error (if available) if the authenticator has errored while initializing.
     */
    getError(): UALError | null;
    /**
     * Returns true if the authenticator is loading while initializing its internal state.
     */
    isLoading(): boolean;
    /**
     * Returns the style of the Button that will be rendered.
     */
    getStyle(): {
        icon: string;
        text: string;
        textColor: string;
        background: string;
    };
    /**
     * Returns whether or not the button should render based on the operating environment and other factors.
     * ie. If your Authenticator App does not support mobile, it returns false when running in a mobile browser.
     */
    shouldRender(): boolean;
    /**
     * Returns whether or not the dapp should attempt to auto login with the Authenticator app.
     * Auto login will only occur when there is only one Authenticator that returns shouldRender() true and
     * shouldAutoLogin() true.
     */
    shouldAutoLogin(): boolean;
    /**
     * Returns whether or not the button should show an account name input field.
     * This is for Authenticators that do not have a concept of account names.
     */
    shouldRequestAccountName(): Promise<boolean>;
    /**
     * Returns the amount of seconds after the authentication will be invalid for logging in on new
     * browser sessions.  Setting this value to zero will cause users to re-attempt authentication on
     * every new browser session.  Please note that the invalidate time will be saved client-side and
     * should not be relied on for security.
     */
    shouldInvalidateAfter(): number;
    /**
     * Login using the Authenticator App. This can return one or more users depending on multiple chain support.
     */
    login(): Promise<User[]>;
    /**
     * Logs the user out of the dapp. This will be strongly dependent on each Authenticator app's patterns.
     */
    logout(): Promise<void>;
    /**
     * Returns true if user confirmation is required for `getKeys`
     */
    requiresGetKeyConfirmation(): boolean;
    /**
     * Returns name of authenticator for persistence in local storage
     */
    getName(): string;
    private receiveLogin;
    private initWaxJS;
    private getEndpoint;
}

export default Wax;
