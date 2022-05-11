// https://www.terraform.io/docs/providers/spotinst
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpotinstProviderConfig {
  /**
  * Spotinst Account ID
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst#account SpotinstProvider#account}
  */
  readonly account?: string;
  /**
  * Spotinst SDK Feature Flags
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst#feature_flags SpotinstProvider#feature_flags}
  */
  readonly featureFlags?: string;
  /**
  * Spotinst Personal API Access Token
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst#token SpotinstProvider#token}
  */
  readonly token?: string;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst#alias SpotinstProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/spotinst spotinst}
*/
export class SpotinstProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/spotinst spotinst} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpotinstProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SpotinstProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'spotinst',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.73.3',
        providerVersionConstraint: '~> 1.0'
      },
      terraformProviderSource: 'spotinst/spotinst'
    });
    this._account = config.account;
    this._featureFlags = config.featureFlags;
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this._account;
  }
  public set account(value: string | undefined) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // feature_flags - computed: false, optional: true, required: false
  private _featureFlags?: string; 
  public get featureFlags() {
    return this._featureFlags;
  }
  public set featureFlags(value: string | undefined) {
    this._featureFlags = value;
  }
  public resetFeatureFlags() {
    this._featureFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureFlagsInput() {
    return this._featureFlags;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account: cdktf.stringToTerraform(this._account),
      feature_flags: cdktf.stringToTerraform(this._featureFlags),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
