package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Flag48: ImageVector
  get() {
    if (_flag48 != null) {
      return _flag48!!
    }
    _flag48 = fluentIcon(name = "Regular.Flag48", 48f) {
      materialPath {
          moveTo(7.5F, 7.25F)
          curveTo(7.5F, 6.56F, 8.06F, 6.0F, 8.75F, 6.0F)
          horizontalLineToRelative(32.5F)
          curveToRelative(0.471F, 0.0F, 0.902F, 0.265F, 1.115F, 0.686F)
          curveToRelative(0.213F, 0.42F, 0.171F, 0.924F, -0.108F, 1.304F)
          lineTo(33.801F, 19.5F)
          lineToRelative(8.456F, 11.51F)
          curveToRelative(0.28F, 0.38F, 0.321F, 0.884F, 0.108F, 1.305F)
          curveTo(42.152F, 32.735F, 41.721F, 33.0F, 41.25F, 33.0F)
          horizontalLineTo(10.0F)
          verticalLineToRelative(9.75F)
          curveTo(10.0F, 43.44F, 9.44F, 44.0F, 8.75F, 44.0F)
          reflectiveCurveTo(7.5F, 43.44F, 7.5F, 42.75F)
          verticalLineTo(7.25F)
          close()
          moveTo(10.0F, 30.5F)
          horizontalLineToRelative(28.78F)
          lineToRelative(-7.537F, -10.26F)
          curveToRelative(-0.324F, -0.44F, -0.324F, -1.04F, 0.0F, -1.48F)
          lineTo(38.78F, 8.5F)
          horizontalLineTo(10.0F)
          verticalLineToRelative(22.0F)
          close()        
      }
    }
    return _flag48!!
  }

private var _flag48: ImageVector? = null
