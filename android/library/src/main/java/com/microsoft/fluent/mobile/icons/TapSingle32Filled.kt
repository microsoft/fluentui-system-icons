package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TapSingle32: ImageVector
  get() {
    if (_tapSingle32 != null) {
      return _tapSingle32!!
    }
    _tapSingle32 = fluentIcon(name = "Filled.TapSingle32", 32f) {
      materialPath {
          moveTo(16.0F, 5.0F)
          curveToRelative(-3.314F, 0.0F, -6.0F, 2.686F, -6.0F, 6.0F)
          curveToRelative(0.0F, 1.302F, 0.415F, 2.508F, 1.12F, 3.491F)
          curveToRelative(-0.734F, -0.015F, -1.454F, 0.118F, -2.122F, 0.38F)
          curveTo(8.362F, 13.724F, 8.0F, 12.404F, 8.0F, 11.0F)
          curveToRelative(0.0F, -4.418F, 3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          curveToRelative(0.0F, 0.895F, -0.147F, 1.756F, -0.418F, 2.56F)
          curveToRelative(-0.174F, -0.053F, -0.352F, -0.097F, -0.534F, -0.132F)
          lineToRelative(-1.444F, -0.28F)
          curveTo(21.86F, 12.483F, 22.0F, 11.759F, 22.0F, 11.0F)
          curveToRelative(0.0F, -3.314F, -2.686F, -6.0F, -6.0F, -6.0F)
          close()
          moveToRelative(0.002F, 3.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, 1.343F, -3.0F, 3.0F)
          verticalLineToRelative(5.495F)
          lineToRelative(-0.449F, -0.189F)
          curveToRelative(-2.23F, -0.937F, -4.777F, 0.306F, -5.41F, 2.642F)
          lineToRelative(-0.09F, 0.332F)
          curveToRelative(-0.212F, 0.78F, 0.232F, 1.562F, 0.963F, 1.817F)
          curveToRelative(4.74F, 1.653F, 6.227F, 3.924F, 6.801F, 5.503F)
          curveToRelative(0.3F, 0.824F, 1.116F, 1.48F, 2.113F, 1.398F)
          lineToRelative(4.76F, -0.388F)
          curveToRelative(1.256F, -0.102F, 2.315F, -0.979F, 2.649F, -2.194F)
          lineToRelative(1.52F, -5.526F)
          curveToRelative(0.618F, -2.247F, -0.809F, -4.545F, -3.097F, -4.988F)
          lineToRelative(-3.76F, -0.727F)
          verticalLineTo(11.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          close()        
      }
    }
    return _tapSingle32!!
  }

private var _tapSingle32: ImageVector? = null
