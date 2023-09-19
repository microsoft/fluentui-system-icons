package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.New20: ImageVector
  get() {
    if (_new20 != null) {
      return _new20!!
    }
    _new20 = fluentIcon(name = "Regular.New20", 20f) {
      materialPath {
          moveTo(15.5F, 3.0F)
          curveTo(15.776F, 3.0F, 16.0F, 3.224F, 16.0F, 3.5F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(15.0F, 11.776F, 15.0F, 11.5F)
          verticalLineToRelative(-8.0F)
          curveTo(15.0F, 3.224F, 15.224F, 3.0F, 15.5F, 3.0F)
          close()
          moveTo(6.146F, 6.146F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineToRelative(6.0F, 6.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineToRelative(-6.0F, -6.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          close()
          moveTo(3.5F, 15.0F)
          curveTo(3.224F, 15.0F, 3.0F, 15.224F, 3.0F, 15.5F)
          reflectiveCurveTo(3.224F, 16.0F, 3.5F, 16.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(11.776F, 15.0F, 11.5F, 15.0F)
          horizontalLineToRelative(-8.0F)
          close()        
      }
    }
    return _new20!!
  }

private var _new20: ImageVector? = null
