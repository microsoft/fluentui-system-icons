package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Flag48: ImageVector
  get() {
    if (_flag48 != null) {
      return _flag48!!
    }
    _flag48 = fluentIcon(name = "Filled.Flag48", 48f) {
      materialPath {
          moveTo(8.75F, 6.0F)
          curveTo(8.06F, 6.0F, 7.5F, 6.56F, 7.5F, 7.25F)
          verticalLineToRelative(35.5F)
          curveTo(7.5F, 43.44F, 8.06F, 44.0F, 8.75F, 44.0F)
          reflectiveCurveTo(10.0F, 43.44F, 10.0F, 42.75F)
          verticalLineTo(33.0F)
          horizontalLineToRelative(31.25F)
          curveToRelative(0.471F, 0.0F, 0.902F, -0.265F, 1.115F, -0.685F)
          curveToRelative(0.213F, -0.42F, 0.171F, -0.925F, -0.108F, -1.305F)
          lineTo(33.801F, 19.5F)
          lineToRelative(8.456F, -11.51F)
          curveToRelative(0.28F, -0.38F, 0.321F, -0.884F, 0.108F, -1.304F)
          curveTo(42.152F, 6.264F, 41.721F, 6.0F, 41.25F, 6.0F)
          horizontalLineTo(8.75F)
          close()        
      }
    }
    return _flag48!!
  }

private var _flag48: ImageVector? = null
