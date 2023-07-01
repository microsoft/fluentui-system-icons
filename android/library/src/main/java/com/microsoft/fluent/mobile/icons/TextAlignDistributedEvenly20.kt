package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextAlignDistributedEvenly20: ImageVector
  get() {
    if (_textAlignDistributedEvenly20 != null) {
      return _textAlignDistributedEvenly20!!
    }
    _textAlignDistributedEvenly20 = fluentIcon(name = "Regular.TextAlignDistributedEvenly20", 20f) {
      materialPath {
          moveTo(2.0F, 3.5F)
          curveTo(2.0F, 3.224F, 2.224F, 3.0F, 2.5F, 3.0F)
          horizontalLineToRelative(15.0F)
          curveTo(17.776F, 3.0F, 18.0F, 3.224F, 18.0F, 3.5F)
          reflectiveCurveTo(17.776F, 4.0F, 17.5F, 4.0F)
          horizontalLineToRelative(-15.0F)
          curveTo(2.224F, 4.0F, 2.0F, 3.776F, 2.0F, 3.5F)
          close()
          moveToRelative(0.0F, 5.0F)
          curveTo(2.0F, 8.224F, 2.224F, 8.0F, 2.5F, 8.0F)
          horizontalLineToRelative(15.0F)
          curveTo(17.776F, 8.0F, 18.0F, 8.224F, 18.0F, 8.5F)
          reflectiveCurveTo(17.776F, 9.0F, 17.5F, 9.0F)
          horizontalLineToRelative(-15.0F)
          curveTo(2.224F, 9.0F, 2.0F, 8.776F, 2.0F, 8.5F)
          close()
          moveTo(3.707F, 15.0F)
          horizontalLineToRelative(12.586F)
          lineToRelative(-1.147F, 1.146F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          lineToRelative(2.0F, -2.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-2.0F, -2.0F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(16.293F, 14.0F)
          horizontalLineTo(3.707F)
          lineToRelative(1.147F, -1.146F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.708F, 0.0F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.195F, 0.196F, -0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(2.0F, 2.0F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(3.707F, 15.0F)
          close()        
      }
    }
    return _textAlignDistributedEvenly20!!
  }

private var _textAlignDistributedEvenly20: ImageVector? = null
