package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Alert24: ImageVector
  get() {
    if (_alert24 != null) {
      return _alert24!!
    }
    _alert24 = fluentIcon(name = "Regular.Alert24", 24f) {
      materialPath {
          moveTo(12.0F, 1.996F)
          curveToRelative(4.05F, 0.0F, 7.357F, 3.195F, 7.496F, 7.25F)
          lineToRelative(0.004F, 0.25F)
          verticalLineToRelative(4.097F)
          lineToRelative(1.38F, 3.156F)
          curveToRelative(0.07F, 0.158F, 0.105F, 0.329F, 0.105F, 0.5F)
          curveToRelative(0.0F, 0.691F, -0.56F, 1.25F, -1.25F, 1.25F)
          lineTo(15.0F, 18.502F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          curveToRelative(-1.598F, 0.0F, -2.904F, -1.249F, -2.995F, -2.823F)
          lineTo(9.0F, 18.499F)
          horizontalLineTo(4.275F)
          curveToRelative(-0.171F, 0.0F, -0.34F, -0.034F, -0.498F, -0.103F)
          curveToRelative(-0.633F, -0.275F, -0.924F, -1.01F, -0.649F, -1.644F)
          lineTo(4.5F, 13.594F)
          verticalLineTo(9.496F)
          curveToRelative(0.0F, -4.155F, 3.352F, -7.5F, 7.5F, -7.5F)
          close()
          moveTo(13.5F, 18.5F)
          lineToRelative(-3.0F, 0.002F)
          curveToRelative(0.0F, 0.829F, 0.672F, 1.5F, 1.5F, 1.5F)
          curveToRelative(0.78F, 0.0F, 1.42F, -0.595F, 1.493F, -1.355F)
          lineTo(13.5F, 18.5F)
          close()
          moveTo(12.0F, 3.496F)
          curveToRelative(-3.32F, 0.0F, -6.0F, 2.674F, -6.0F, 6.0F)
          verticalLineToRelative(4.41F)
          lineTo(4.656F, 17.0F)
          horizontalLineToRelative(14.697F)
          lineTo(18.0F, 13.907F)
          verticalLineTo(9.509F)
          lineToRelative(-0.003F, -0.225F)
          curveTo(17.885F, 6.05F, 15.242F, 3.496F, 12.0F, 3.496F)
          close()        
      }
    }
    return _alert24!!
  }

private var _alert24: ImageVector? = null
