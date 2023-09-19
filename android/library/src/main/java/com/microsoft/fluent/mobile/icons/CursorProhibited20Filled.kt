package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CursorProhibited20: ImageVector
  get() {
    if (_cursorProhibited20 != null) {
      return _cursorProhibited20!!
    }
    _cursorProhibited20 = fluentIcon(name = "Filled.CursorProhibited20", 20f) {
      materialPath {
          moveTo(10.0F, 5.5F)
          curveToRelative(0.0F, 2.485F, 2.015F, 4.5F, 4.5F, 4.5F)
          reflectiveCurveTo(19.0F, 7.985F, 19.0F, 5.5F)
          reflectiveCurveTo(16.985F, 1.0F, 14.5F, 1.0F)
          reflectiveCurveTo(10.0F, 3.015F, 10.0F, 5.5F)
          close()
          moveToRelative(1.0F, 0.0F)
          curveTo(11.0F, 3.567F, 12.567F, 2.0F, 14.5F, 2.0F)
          curveToRelative(0.786F, 0.0F, 1.512F, 0.26F, 2.096F, 0.697F)
          lineToRelative(-4.9F, 4.9F)
          curveTo(11.26F, 7.011F, 11.0F, 6.286F, 11.0F, 5.5F)
          close()
          moveTo(14.5F, 9.0F)
          curveToRelative(-0.786F, 0.0F, -1.512F, -0.26F, -2.096F, -0.697F)
          lineToRelative(4.9F, -4.9F)
          curveTo(17.74F, 3.989F, 18.0F, 4.714F, 18.0F, 5.5F)
          curveTo(18.0F, 7.433F, 16.433F, 9.0F, 14.5F, 9.0F)
          close()
          moveToRelative(0.0F, 2.0F)
          curveTo(11.462F, 11.0F, 9.0F, 8.538F, 9.0F, 5.5F)
          curveToRelative(0.0F, -0.4F, 0.043F, -0.789F, 0.123F, -1.164F)
          lineTo(6.636F, 2.287F)
          curveTo(5.983F, 1.75F, 5.0F, 2.215F, 5.0F, 3.06F)
          verticalLineToRelative(14.0F)
          curveToRelative(0.0F, 0.925F, 1.15F, 1.354F, 1.756F, 0.654F)
          lineToRelative(3.524F, -4.073F)
          curveToRelative(0.285F, -0.33F, 0.699F, -0.518F, 1.134F, -0.518F)
          horizontalLineToRelative(5.592F)
          curveToRelative(0.938F, 0.0F, 1.36F, -1.176F, 0.636F, -1.772F)
          lineToRelative(-0.967F, -0.797F)
          curveTo(16.008F, 10.841F, 15.272F, 11.0F, 14.5F, 11.0F)
          close()        
      }
    }
    return _cursorProhibited20!!
  }

private var _cursorProhibited20: ImageVector? = null
