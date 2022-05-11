// https://www.terraform.io/docs/providers/spotinst/r/ocean_gke_launch_spec_import
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceanGkeLaunchSpecImportConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_gke_launch_spec_import#node_pool_name OceanGkeLaunchSpecImport#node_pool_name}
  */
  readonly nodePoolName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_gke_launch_spec_import#ocean_id OceanGkeLaunchSpecImport#ocean_id}
  */
  readonly oceanId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_gke_launch_spec_import spotinst_ocean_gke_launch_spec_import}
*/
export class OceanGkeLaunchSpecImport extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_ocean_gke_launch_spec_import";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/spotinst/r/ocean_gke_launch_spec_import spotinst_ocean_gke_launch_spec_import} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceanGkeLaunchSpecImportConfig
  */
  public constructor(scope: Construct, id: string, config: OceanGkeLaunchSpecImportConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_ocean_gke_launch_spec_import',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.73.3',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._nodePoolName = config.nodePoolName;
    this._oceanId = config.oceanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // node_pool_name - computed: false, optional: false, required: true
  private _nodePoolName?: string; 
  public get nodePoolName() {
    return this.getStringAttribute('node_pool_name');
  }
  public set nodePoolName(value: string) {
    this._nodePoolName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolNameInput() {
    return this._nodePoolName;
  }

  // ocean_id - computed: false, optional: false, required: true
  private _oceanId?: string; 
  public get oceanId() {
    return this.getStringAttribute('ocean_id');
  }
  public set oceanId(value: string) {
    this._oceanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oceanIdInput() {
    return this._oceanId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      node_pool_name: cdktf.stringToTerraform(this._nodePoolName),
      ocean_id: cdktf.stringToTerraform(this._oceanId),
    };
  }
}
