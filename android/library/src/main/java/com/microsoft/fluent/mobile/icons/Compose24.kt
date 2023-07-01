package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Compose24: ImageVector
  get() {
    if (_compose24 != null) {
      return _compose24!!
    }
    _compose24 = fluentIcon(name = "Regular.Compose24", 24f) {
      materialPath {
          moveTo(21.78F, 3.28F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(-0.293F, -0.293F, -0.768F, -0.293F, -1.06F, 0.0F)
          lineToRelative(-10.0F, 10.0F)
          lineToRelative(-0.47F, 1.53F)
          lineToRelative(1.53F, -0.47F)
          lineToRelative(10.0F, -10.0F)
          close()
          moveTo(6.25F, 3.0F)
          curveTo(4.455F, 3.0F, 3.0F, 4.455F, 3.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveTo(3.0F, 19.545F, 4.455F, 21.0F, 6.25F, 21.0F)
          horizontalLineToRelative(11.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineToRelative(-8.0F)
          curveTo(21.0F, 9.336F, 20.664F, 9.0F, 20.25F, 9.0F)
          reflectiveCurveTo(19.5F, 9.336F, 19.5F, 9.75F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 0.966F, -0.784F, 1.75F, -1.75F, 1.75F)
          horizontalLineTo(6.25F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          verticalLineTo(6.25F)
          curveToRelative(0.0F, -0.966F, 0.784F, -1.75F, 1.75F, -1.75F)
          horizontalLineToRelative(8.0F)
          curveTo(14.664F, 4.5F, 15.0F, 4.164F, 15.0F, 3.75F)
          reflectiveCurveTo(14.664F, 3.0F, 14.25F, 3.0F)
          horizontalLineToRelative(-8.0F)
          close()        
      }
    }
    return _compose24!!
  }

private var _compose24: ImageVector? = null
