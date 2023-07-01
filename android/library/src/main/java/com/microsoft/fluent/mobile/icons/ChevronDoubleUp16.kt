package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronDoubleUp16: ImageVector
  get() {
    if (_chevronDoubleUp16 != null) {
      return _chevronDoubleUp16!!
    }
    _chevronDoubleUp16 = fluentIcon(name = "Regular.ChevronDoubleUp16", 16f) {
      materialPath {
          moveTo(3.853F, 8.354F)
          curveToRelative(-0.195F, 0.195F, -0.511F, 0.195F, -0.707F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.707F)
          lineToRelative(4.5F, -4.5F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          lineToRelative(4.5F, 4.5F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineTo(8.0F, 4.207F)
          lineTo(3.854F, 8.354F)
          close()
          moveToRelative(0.0F, 4.0F)
          curveToRelative(-0.195F, 0.195F, -0.511F, 0.195F, -0.707F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(4.5F, -4.5F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineToRelative(4.5F, 4.5F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineTo(8.0F, 8.207F)
          lineToRelative(-4.146F, 4.147F)
          close()        
      }
    }
    return _chevronDoubleUp16!!
  }

private var _chevronDoubleUp16: ImageVector? = null
