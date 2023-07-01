package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentPill20: ImageVector
  get() {
    if (_documentPill20 != null) {
      return _documentPill20!!
    }
    _documentPill20 = fluentIcon(name = "Filled.DocumentPill20", 20f) {
      materialPath {
          moveTo(10.0F, 2.0F)
          verticalLineToRelative(4.5F)
          curveTo(10.0F, 7.328F, 10.672F, 8.0F, 11.5F, 8.0F)
          horizontalLineTo(16.0F)
          verticalLineToRelative(0.913F)
          curveToRelative(-0.754F, 0.105F, -1.481F, 0.447F, -2.06F, 1.027F)
          lineToRelative(-4.0F, 4.0F)
          curveToRelative(-1.1F, 1.098F, -1.345F, 2.725F, -0.738F, 4.06F)
          horizontalLineTo(5.5F)
          curveTo(4.672F, 18.0F, 4.0F, 17.328F, 4.0F, 16.5F)
          verticalLineToRelative(-13.0F)
          curveTo(4.0F, 2.672F, 4.672F, 2.0F, 5.5F, 2.0F)
          horizontalLineTo(10.0F)
          close()
          moveToRelative(1.0F, 0.25F)
          verticalLineTo(6.5F)
          curveTo(11.0F, 6.776F, 11.224F, 7.0F, 11.5F, 7.0F)
          horizontalLineToRelative(4.25F)
          lineTo(11.0F, 2.25F)
          close()
          moveToRelative(7.354F, 8.397F)
          curveToRelative(-1.024F, -1.024F, -2.684F, -1.024F, -3.708F, 0.0F)
          lineToRelative(-4.0F, 4.0F)
          curveToRelative(-1.023F, 1.023F, -1.023F, 2.683F, 0.0F, 3.707F)
          curveToRelative(1.024F, 1.024F, 2.684F, 1.024F, 3.707F, 0.0F)
          lineToRelative(4.0F, -4.0F)
          curveToRelative(1.024F, -1.024F, 1.024F, -2.684F, 0.0F, -3.707F)
          close()
          moveToRelative(-3.0F, 0.707F)
          curveToRelative(0.633F, -0.633F, 1.66F, -0.633F, 2.292F, 0.0F)
          curveToRelative(0.634F, 0.633F, 0.634F, 1.66F, 0.0F, 2.293F)
          lineTo(16.0F, 15.293F)
          lineTo(13.707F, 13.0F)
          lineToRelative(1.646F, -1.646F)
          close()
          moveToRelative(-1.5F, 4.292F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          lineToRelative(-1.0F, 1.0F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(1.0F, -1.0F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          close()        
      }
    }
    return _documentPill20!!
  }

private var _documentPill20: ImageVector? = null
