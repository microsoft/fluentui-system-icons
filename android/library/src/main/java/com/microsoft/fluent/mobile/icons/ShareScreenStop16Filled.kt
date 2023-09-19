package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ShareScreenStop16: ImageVector
  get() {
    if (_shareScreenStop16 != null) {
      return _shareScreenStop16!!
    }
    _shareScreenStop16 = fluentIcon(name = "Filled.ShareScreenStop16", 16f) {
      materialPath {
          moveTo(3.0F, 3.0F)
          curveTo(1.895F, 3.0F, 1.0F, 3.895F, 1.0F, 5.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(3.0F)
          close()
          moveToRelative(2.146F, 2.146F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineTo(8.0F, 7.293F)
          lineToRelative(2.146F, -2.147F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineTo(8.707F, 8.0F)
          lineToRelative(2.147F, 2.146F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineTo(8.0F, 8.707F)
          lineToRelative(-2.146F, 2.147F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.707F)
          lineTo(7.293F, 8.0F)
          lineTo(5.146F, 5.854F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          close()        
      }
    }
    return _shareScreenStop16!!
  }

private var _shareScreenStop16: ImageVector? = null
