package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronDoubleRight20: ImageVector
  get() {
    if (_chevronDoubleRight20 != null) {
      return _chevronDoubleRight20!!
    }
    _chevronDoubleRight20 = fluentIcon(name = "Regular.ChevronDoubleRight20", 20f) {
      materialPath {
          moveTo(8.646F, 4.147F)
          curveTo(8.84F, 3.951F, 9.157F, 3.951F, 9.353F, 4.146F)
          lineToRelative(5.484F, 5.465F)
          curveToRelative(0.216F, 0.215F, 0.216F, 0.564F, 0.0F, 0.779F)
          lineToRelative(-5.484F, 5.465F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.194F, -0.707F, -0.001F)
          curveToRelative(-0.195F, -0.196F, -0.195F, -0.512F, 0.001F, -0.707F)
          lineTo(13.812F, 10.0F)
          lineTo(8.647F, 4.854F)
          curveTo(8.451F, 4.66F, 8.451F, 4.343F, 8.646F, 4.147F)
          close()
          moveToRelative(-4.0F, 0.0F)
          curveTo(4.84F, 3.951F, 5.157F, 3.951F, 5.353F, 4.146F)
          lineToRelative(5.484F, 5.465F)
          curveToRelative(0.216F, 0.215F, 0.216F, 0.564F, 0.0F, 0.779F)
          lineToRelative(-5.484F, 5.465F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.194F, -0.707F, -0.001F)
          curveToRelative(-0.195F, -0.196F, -0.194F, -0.512F, 0.001F, -0.707F)
          lineTo(9.812F, 10.0F)
          lineTo(4.647F, 4.854F)
          curveTo(4.451F, 4.66F, 4.451F, 4.343F, 4.646F, 4.147F)
          close()        
      }
    }
    return _chevronDoubleRight20!!
  }

private var _chevronDoubleRight20: ImageVector? = null
