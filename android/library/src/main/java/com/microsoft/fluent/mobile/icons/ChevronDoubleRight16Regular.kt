package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronDoubleRight16: ImageVector
  get() {
    if (_chevronDoubleRight16 != null) {
      return _chevronDoubleRight16!!
    }
    _chevronDoubleRight16 = fluentIcon(name = "Regular.ChevronDoubleRight16", 16f) {
      materialPath {
          moveTo(7.646F, 3.853F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.511F, 0.0F, -0.707F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineToRelative(4.5F, 4.5F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-4.5F, 4.5F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.708F)
          lineTo(11.793F, 8.0F)
          lineTo(7.647F, 3.854F)
          close()
          moveToRelative(-4.0F, 0.0F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.511F, 0.0F, -0.707F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineToRelative(4.5F, 4.5F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-4.5F, 4.5F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(7.793F, 8.0F)
          lineTo(3.646F, 3.854F)
          close()        
      }
    }
    return _chevronDoubleRight16!!
  }

private var _chevronDoubleRight16: ImageVector? = null
