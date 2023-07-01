package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TagLockAccent16: ImageVector
  get() {
    if (_tagLockAccent16 != null) {
      return _tagLockAccent16!!
    }
    _tagLockAccent16 = fluentIcon(name = "Filled.TagLockAccent16", 16f) {
      materialPath {
          moveTo(6.648F, 1.954F)
          lineToRelative(-4.76F, 4.728F)
          curveToRelative(-0.59F, 0.586F, -0.59F, 1.534F, 0.0F, 2.12F)
          lineToRelative(3.31F, 3.287F)
          curveTo(5.686F, 12.574F, 6.424F, 12.66F, 7.0F, 12.344F)
          verticalLineTo(10.0F)
          curveToRelative(0.0F, -0.932F, 0.637F, -1.715F, 1.5F, -1.937F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          curveToRelative(0.343F, 0.0F, 0.673F, 0.058F, 0.98F, 0.164F)
          lineToRelative(0.016F, -2.153F)
          curveToRelative(0.006F, -0.832F, -0.674F, -1.515F, -1.52F, -1.511F)
          lineTo(7.714F, 1.514F)
          curveToRelative(-0.4F, 0.001F, -0.783F, 0.16F, -1.065F, 0.44F)
          close()        
      }
    }
    return _tagLockAccent16!!
  }

private var _tagLockAccent16: ImageVector? = null
