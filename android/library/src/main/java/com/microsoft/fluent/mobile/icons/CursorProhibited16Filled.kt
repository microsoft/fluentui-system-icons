package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CursorProhibited16: ImageVector
  get() {
    if (_cursorProhibited16 != null) {
      return _cursorProhibited16!!
    }
    _cursorProhibited16 = fluentIcon(name = "Filled.CursorProhibited16", 16f) {
      materialPath {
          moveTo(7.0F, 4.5F)
          curveTo(7.0F, 6.985F, 9.015F, 9.0F, 11.5F, 9.0F)
          curveTo(13.986F, 9.0F, 16.0F, 6.985F, 16.0F, 4.5F)
          reflectiveCurveTo(13.986F, 0.0F, 11.5F, 0.0F)
          curveTo(9.015F, 0.0F, 7.0F, 2.015F, 7.0F, 4.5F)
          close()
          moveToRelative(1.0F, 0.0F)
          curveTo(8.0F, 2.567F, 9.567F, 1.0F, 11.5F, 1.0F)
          curveToRelative(0.786F, 0.0F, 1.512F, 0.26F, 2.096F, 0.697F)
          lineToRelative(-4.899F, 4.9F)
          curveTo(8.26F, 6.011F, 8.0F, 5.286F, 8.0F, 4.5F)
          close()
          moveTo(11.5F, 8.0F)
          curveToRelative(-0.786F, 0.0F, -1.51F, -0.26F, -2.096F, -0.697F)
          lineToRelative(4.9F, -4.9F)
          curveTo(14.74F, 2.989F, 15.0F, 3.714F, 15.0F, 4.5F)
          curveTo(15.0F, 6.433F, 13.433F, 8.0F, 11.5F, 8.0F)
          close()
          moveToRelative(0.0F, 2.0F)
          curveToRelative(0.514F, 0.0F, 1.011F, -0.07F, 1.483F, -0.202F)
          curveTo(13.095F, 10.368F, 12.69F, 11.0F, 11.999F, 11.0F)
          horizontalLineTo(8.054F)
          curveToRelative(-0.31F, 0.0F, -0.604F, 0.144F, -0.793F, 0.39F)
          lineToRelative(-2.466F, 3.215F)
          curveToRelative(-0.581F, 0.758F, -1.793F, 0.347F, -1.793F, -0.609F)
          verticalLineTo(3.998F)
          curveToRelative(0.0F, -0.824F, 0.94F, -1.294F, 1.6F, -0.8F)
          lineToRelative(1.404F, 1.054F)
          curveTo(6.002F, 4.334F, 6.0F, 4.417F, 6.0F, 4.5F)
          curveTo(6.0F, 7.538F, 8.463F, 10.0F, 11.5F, 10.0F)
          close()        
      }
    }
    return _cursorProhibited16!!
  }

private var _cursorProhibited16: ImageVector? = null
