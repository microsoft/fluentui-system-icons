package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextHanging20: ImageVector
  get() {
    if (_textHanging20 != null) {
      return _textHanging20!!
    }
    _textHanging20 = fluentIcon(name = "Regular.TextHanging20", 20f) {
      materialPath {
          moveTo(16.5F, 4.0F)
          curveTo(16.776F, 4.0F, 17.0F, 4.224F, 17.0F, 4.5F)
          reflectiveCurveTo(16.776F, 5.0F, 16.5F, 5.0F)
          horizontalLineToRelative(-13.0F)
          curveTo(3.224F, 5.0F, 3.0F, 4.776F, 3.0F, 4.5F)
          reflectiveCurveTo(3.224F, 4.0F, 3.5F, 4.0F)
          horizontalLineToRelative(13.0F)
          close()
          moveToRelative(-4.0F, 10.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(12.776F, 15.0F, 12.5F, 15.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(3.224F, 15.0F, 3.0F, 14.776F, 3.0F, 14.5F)
          reflectiveCurveTo(3.224F, 14.0F, 3.5F, 14.0F)
          horizontalLineToRelative(9.0F)
          close()
          moveTo(13.0F, 9.5F)
          curveTo(13.0F, 9.224F, 12.776F, 9.0F, 12.5F, 9.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(3.224F, 9.0F, 3.0F, 9.224F, 3.0F, 9.5F)
          reflectiveCurveTo(3.224F, 10.0F, 3.5F, 10.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          close()
          moveToRelative(2.146F, 2.146F)
          lineToRelative(1.5F, -1.5F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(16.207F, 12.0F)
          lineToRelative(1.147F, 1.146F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineToRelative(-1.5F, -1.5F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          close()        
      }
    }
    return _textHanging20!!
  }

private var _textHanging20: ImageVector? = null
