package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Beaker20: ImageVector
  get() {
    if (_beaker20 != null) {
      return _beaker20!!
    }
    _beaker20 = fluentIcon(name = "Regular.Beaker20", 20f) {
      materialPath {
          moveTo(6.5F, 4.0F)
          horizontalLineToRelative(0.75F)
          verticalLineToRelative(4.747F)
          curveToRelative(0.0F, 0.412F, -0.102F, 0.818F, -0.296F, 1.18F)
          lineToRelative(-2.606F, 4.865F)
          curveTo(3.813F, 15.79F, 4.536F, 17.0F, 5.67F, 17.0F)
          horizontalLineToRelative(8.66F)
          curveToRelative(1.133F, 0.0F, 1.857F, -1.21F, 1.322F, -2.208F)
          lineToRelative(-2.606F, -4.864F)
          curveToRelative(-0.194F, -0.364F, -0.296F, -0.769F, -0.296F, -1.181F)
          verticalLineTo(4.0F)
          horizontalLineToRelative(0.75F)
          curveTo(13.776F, 4.0F, 14.0F, 3.776F, 14.0F, 3.5F)
          reflectiveCurveTo(13.776F, 3.0F, 13.5F, 3.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(6.224F, 3.0F, 6.0F, 3.224F, 6.0F, 3.5F)
          reflectiveCurveTo(6.224F, 4.0F, 6.5F, 4.0F)
          close()
          moveToRelative(1.75F, 4.747F)
          verticalLineTo(4.0F)
          horizontalLineToRelative(3.5F)
          verticalLineToRelative(4.747F)
          curveToRelative(0.0F, 0.577F, 0.142F, 1.145F, 0.415F, 1.653F)
          lineToRelative(0.59F, 1.1F)
          horizontalLineToRelative(-5.51F)
          lineToRelative(0.59F, -1.1F)
          curveTo(8.107F, 9.892F, 8.25F, 9.324F, 8.25F, 8.747F)
          close()
          moveTo(6.71F, 12.5F)
          horizontalLineToRelative(6.58F)
          lineToRelative(1.48F, 2.764F)
          curveTo(14.95F, 15.597F, 14.708F, 16.0F, 14.33F, 16.0F)
          horizontalLineTo(5.67F)
          curveToRelative(-0.378F, 0.0F, -0.62F, -0.403F, -0.44F, -0.736F)
          lineTo(6.71F, 12.5F)
          close()        
      }
    }
    return _beaker20!!
  }

private var _beaker20: ImageVector? = null
